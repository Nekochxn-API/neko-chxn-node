import { get } from 'https';

class NekoChxn {
	private readonly baseUrl = 'https://api.neko-chxn.xyz/V1/';

	public blush = () => this.fetch(`${this.baseUrl}BLUSH/IMG`);
	public cry = () => this.fetch(`${this.baseUrl}CRY/IMG`);
	public cuddle = () => this.fetch(`${this.baseUrl}CUDDLE/IMG`);
	public dance = () => this.fetch(`${this.baseUrl}DANCE/IMG`);
	public hug = () => this.fetch(`${this.baseUrl}HUG/IMG`);
	public lick = () => this.fetch(`${this.baseUrl}LICK/IMG`);
	public kiss = () => this.fetch(`${this.baseUrl}KISS/IMG`);
	public love = () => this.fetch(`${this.baseUrl}LOVE/IMG`);
	public pat = () => this.fetch(`${this.baseUrl}PAT/IMG`);
	public punch = () => this.fetch(`${this.baseUrl}PUNCH/IMG`);
	public smirk = () => this.fetch(`${this.baseUrl}SMIRK/IMG`);
	public tickle = () => this.fetch(`${this.baseUrl}TICKLE/IMG`);
	public yell = () => this.fetch(`${this.baseUrl}YELL/IMG`);

	private fetch(url: string): Promise<ApiImageResponse> {
		return new Promise((resolve, reject) => {
			get(url, res => {
				if (!res.statusCode || res.statusCode > 299 || res.statusCode < 200) {
					res.resume();
					reject(`Error while fetching Neko-Chxn: ${res.statusCode} - ${res.statusMessage ?? 'Unknown error while fetching Neko-Chxn'}`);
				}
				res.setEncoding('utf8');
				let rawData = '';
				res.on('data', chunk => {
					rawData += chunk;
				});
				res.on('end', () => {
					try {
						const parsedData = JSON.parse(rawData);
						resolve(parsedData);
					} catch (e) {
						reject(`Error: ${e.message}`);
					}
				});
			}).on('error', err => {
				reject(`Error while fetching Neko-Chxn: ${err.message}`);
			});
		});
	}
}

export interface ApiImageResponse {
	URL: string;
}
export type ApiImageFetch = (url: string) => Promise<ApiImageResponse>;
export type ApiImageEndpoints = keyof NekoChxn;

const nekoChxn = new NekoChxn();

export default nekoChxn;
module.exports = nekoChxn;
export { nekoChxn };

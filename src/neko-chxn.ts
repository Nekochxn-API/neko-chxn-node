import { get } from 'https';

class NekoChxn {
	private readonly baseUrl = 'https://api.neko-chxn.xyz/V1/';

	/**
	 * Get a blush gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public blush = () => this.fetch(`${this.baseUrl}BLUSH/IMG`);

	/**
	 * Get a cry gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public cry = () => this.fetch(`${this.baseUrl}CRY/IMG`);

	/**
	 * Get a cuddle gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public cuddle = () => this.fetch(`${this.baseUrl}CUDDLE/IMG`);

	/**
	 * Get a dance gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public dance = () => this.fetch(`${this.baseUrl}DANCE/IMG`);

	/**
	 * Get a hug gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public hug = () => this.fetch(`${this.baseUrl}HUG/IMG`);

	/**
	 * Get a kick gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public kick = () => this.fetch(`${this.baseUrl}KICK/IMG`);

	/**
	 * Get a kiss gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public kiss = () => this.fetch(`${this.baseUrl}KISS/IMG`);

	/**
	 * Get a love gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public love = () => this.fetch(`${this.baseUrl}LOVE/IMG`);

	/**
	 * Get a pat gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public pat = () => this.fetch(`${this.baseUrl}PAT/IMG`);

	/**
	 * Get a punch gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public punch = () => this.fetch(`${this.baseUrl}PUNCH/IMG`);

	/**
	 * Get a smirk gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public smirk = () => this.fetch(`${this.baseUrl}SMIRK/IMG`);

	/**
	 * Get a tickle gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public tickle = () => this.fetch(`${this.baseUrl}TICKLE/IMG`);

	/**
	 * Get a yell gif
	 * @returns {Promise<ApiImageResponse>}
	 */
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
export { nekoChxn };
module.exports = nekoChxn;

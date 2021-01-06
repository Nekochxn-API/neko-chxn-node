import { get } from 'https';

class NekoChxn {
	private readonly _baseUrl = 'https://api.neko-chxn.xyz/v1/';

	public readonly version: string = require('../package.json').version;
	/**
	 * Get a blush gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public blush = () => this._fetch('blush/img');

	/**
	 * Get a cry gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public cry = () => this._fetch('cry/img');

	/**
	 * Get a cuddle gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public cuddle = () => this._fetch('cuddle/img');

	/**
	 * Get a dance gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public dance = () => this._fetch('dance/img');

	/**
	 * Get a hug gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public hug = () => this._fetch('hug/img');

	/**
	 * Get a kick gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public kick = () => this._fetch('kick/img');

	/**
	 * Get a kiss gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public kiss = () => this._fetch('kiss/img');

	/**
	 * Get a love gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public love = () => this._fetch('love/img');

	/**
	 * Get a pat gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public pat = () => this._fetch('pat/img');

	/**
	 * Get a punch gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public punch = () => this._fetch('punch/img');

	/**
	 * Get a smirk gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public smirk = () => this._fetch('smirk/img');

	/**
	 * Get a tickle gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public tickle = () => this._fetch('tickle/img');

	/**
	 * Get a yell gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public yell = () => this._fetch('yell/img');

	 /**
	 * Get a look gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public look = () => this._fetch('/look/img');

	 /**
	 * Get a laugh gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public laugh = () => this._fetch('/laugh/img');

	/**
	 * Get a laugh gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public bored = () => this._fetch('/bored/img');
	
	/**
	 * Get a nervous gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public nervous = () => this._fetch('/nervous/img');
		
	/**
	 * Get a dab gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public dab = () => this._fetch('/dab/img');
		
	/**
	 * Get a angry gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public angry = () => this._fetch('/angry/img');
		
	/**
	 * Get a wave gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public wave = () => this._fetch('/wave/img');
		
	/**
	 * Get a annoy gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public annoy = () => this._fetch('/annoy/img');
		
	/**
	 * Get a bite gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public bite = () => this._fetch('/bite/img');
			
	/**
	 * Get a coslpay gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public coslpay = () => this._fetch('/coslpay/img');
			
	/**
	 * Get a eat gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public eat = () => this._fetch('/eat/img');
			
	/**
	 * Get a feed gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public feed = () => this._fetch('/feed/img');
			
	/**
	 * Get a faceplam gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public faceplam = () => this._fetch('/faceplam/img');
			
	/**
	 * Get a happy gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public happy = () => this._fetch('/happy/img');
			
	/**
	 * Get a jump gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public jump = () => this._fetch('/jump/img');			
	/**
	 * Get a kill gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public kill = () => this._fetch('/kill/img');			
	/**
	 * Get a lick gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public lick = () => this._fetch('/lick/img');
				
	/**
	 * Get a poke gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public poke = () => this._fetch('/poke/img');
				
	/**
	 * Get a pout gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public pout = () => this._fetch('/pout/img');
					
	/**
	 * Get a sleep gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public sleep = () => this._fetch('/sleep/img');
					
	/**
	 * Get a pout gif
	 * @returns {Promise<ApiImageResponse>}
	 */
	public vtuber = () => this._fetch('/vtuber/img');
					

	private _fetch(endpoint: string): Promise<ApiImageResponse> {
		return new Promise((resolve, reject) => {
			get(this._baseUrl + endpoint, res => {
				if (!res.statusCode || res.statusCode > 299 || res.statusCode < 200) {
					res.resume();
					reject(`Error while fetching Neko-Chxn: ${res.statusCode} - ${res.statusMessage ?? 'Unknown error while fetching Neko-Chxn'}`);
				}
				res.setEncoding('utf8');
				let raw = '';
				res.on('data', data => {
					raw += data;
				});
				res.on('end', () => {
					try {
						const parsed = JSON.parse(raw);
						resolve(parsed);
					} catch (err) {
						reject(`Error: ${err.message}`);
					}
				});
			}).on('error', err => {
				reject(`Error while fetching Neko-Chxn: ${err.message}`);
			});
		});
	}
}

export interface ApiImageResponse {
	url: string;
}

const nekoChxn = new NekoChxn();

export default nekoChxn;
export { nekoChxn };
module.exports = nekoChxn;

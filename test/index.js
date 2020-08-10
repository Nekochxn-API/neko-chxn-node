const neko = require('..');

let success = true;
const test = async (description, fn) => {
	try {
		await fn();
		console.log(`SUCCESS: ${description}`);
	} catch (error) {
		console.error(`FAIL: ${description}`);
		success = false;
		throw error;
	}
};

Promise.all(
	Object.keys(neko)
		.filter(key => typeof neko[key] === 'function')
		.map(key => test(`Test ${key}`, neko[key]))
).finally(() => process.exit(success ? 0 : 1));

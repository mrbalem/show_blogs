/** @format */

/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/

String.prototype.cleanString = function() {
	let asccii = 0;
	let char = '';
	let request = '';
	let special = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', ñ: 'n' };

	let string = this.toLocaleLowerCase();

	for (let i in string) {
		char = string[i];
		char = typeof special[char] !== 'undefined' ? special[char] : char;
		if (typeof char !== 'function') {
			asccii = char.charCodeAt();
			request +=
				asccii === 32 ||
				(asccii >= 48 && asccii <= 57) ||
				(asccii >= 97 && asccii <= 122)
					? char
					: '';
		}
	}
	request = request.split(' ');
	request = request.filter(Boolean);
	request = request.join('-');

	return request;
};

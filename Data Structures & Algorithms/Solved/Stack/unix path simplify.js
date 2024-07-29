/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	let stack = [];
	let parts = path.split('/');

	for (let part of parts) {
		if (part === '' || part === '.') {
			continue;
		}
		if (part === '..') {
			if (stack.length) {
				stack.pop();
			}
		} else {
			stack.push(part);
		}
	}

	return '/' + stack.join('/');
};


var MyStack = function () {
	this.q1 = [];
	this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.q2.push(x);
	while (this.q1.length) {
		this.q2.push(this.q1.pop())
	}
	while (this.q2.length) {
		this.q1.push(this.q2.pop())
	}
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
	return this.q1.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
	if (!this.q1.length) return -1;
	return this.q1[this.q1.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return !this.q1.length
};

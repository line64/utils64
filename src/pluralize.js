"use strict";

export function pluralize(number, single, plural) {
	return (number > 1 || number === 0) ? plural : single;
}

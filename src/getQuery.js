"use strict";

export function getQuery(location, checker) {

	let query = (location.query) ? location.query : location.state;

	if (checker) {
		return (query[checker]) ? query : null;
	}

	return query;

}

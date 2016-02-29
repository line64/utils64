"use strict";

import Countries from "../json/countries.json";
import { find } from "lodash";

export function getCountryName(code) {

    let found = find(Countries.countries, (country) => country.code === code.toUpperCase());

    if (found) return found.country;

    return code;

}

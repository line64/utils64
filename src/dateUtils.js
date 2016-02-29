"use strict";

import moment from "moment";

export function dateDifference(initial, final, diffType) {

    initial = moment(initial, dateISOFormat());
    final   = moment(final, dateISOFormat());

    return final.diff(initial, diffType);

}

export function dateISOFormat() {
    return "YYYY-MM-DD";
}

export function dateDisplayFormat() {
    return "DD-MM-YYYY";
}

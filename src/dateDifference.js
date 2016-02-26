"use strict";

import moment from "moment";
import { dateISOFormat } from "./dateFormatting";

export default function dateDifference(initial, final, diffType) {

    initial = moment(initial, dateISOFormat());
    final   = moment(final, dateISOFormat());

    return final.diff(initial, diffType);

}

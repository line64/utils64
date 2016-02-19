"use strict";

export function concatenateVariables(vars) {

    let result = "", k;

    for (k in vars) {
        if (typeof vars[k] === "string") {
            result += "const " + k + " = '" + vars[k] + "'; ";
        } else {
            result += "const " + k + " = " + vars[k] + "; ";
        }
    }

    return result;

}

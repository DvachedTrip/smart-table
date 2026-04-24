import { rules, createComparison } from "../lib/compare.js";

export function initSearching(searchField) {
    const compare = createComparison([
        rules.skipEmptyTargetValues,
        rules.searchMultipleFields(
            searchField,
            ["date", "customer", "seller"],
            false,
        ),
    ]);

    return (data, state) => {
        if (!state[searchField]) return data;

        return data.filter((row) => compare(row, state));
    };
}

import { createComparison, defaultRules } from "../lib/compare.js";

export function initFiltering(elements, indexes) {
    const compare = createComparison(defaultRules);

    const updateIndexes = (elements, indexes) => {
        Object.keys(indexes).forEach((elementName) => {
            elements[elementName].append(
                ...Object.values(indexes[elementName]).map((name) => {
                    const el = document.createElement("option");
                    el.textContent = name;
                    el.value = name;
                    return el;
                }),
            );
        });
    };

    const applyFiltering = (data, state) => {
        return data.filter((row) => compare(row, state));
    };

    return {
        updateIndexes,
        applyFiltering,
    };
}

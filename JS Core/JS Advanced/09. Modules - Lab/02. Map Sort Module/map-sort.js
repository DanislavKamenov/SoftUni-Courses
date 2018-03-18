function mapSort(map, sortFn) {
    if (sortFn !== null && sortFn !== undefined) {
        return new Map([...map].sort(sortFn));
    } else {
        return new Map([...map].sort((a, b) => {
            if (typeof a[0] === 'string') {
                return a[0].localeCompare(b[0])
            }

            return a[0] - b[0];
        }));
    }
}

module.exports = mapSort;
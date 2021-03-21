function findMatching(list, names) {
    let matching = list.filter(check => check.toUpperCase() === names.toUpperCase())
    return matching
}

function fuzzyMatch(list, names) {
    let matching = list.filter(check => check.substring(0,2) === names)
    return matching
}

function matchName(group, names) {
    let filtered = group.filter(check => check.name === names)
    return filtered
}
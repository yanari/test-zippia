export function getNested(object, dotNotationString) {
    const parts = dotNotationString.split('.');
    return parts.reduce((item, value) => item[value], object);
}
const identifierLength = 1;

export function getIdFromUrl(str) {
  return str.slice(str.length - identifierLength);
}

export function getItemFilter(field, item) {
  const fieldLower = field.toLowerCase();
  const itemLowerRu = item.nameRU.toLowerCase();
  const itemLowerEn = item.nameEN.toLowerCase();

  return itemLowerRu.includes(fieldLower) || itemLowerEn.includes(fieldLower);
}

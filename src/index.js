'use strict';
export function sortLocale (elements) {
  return [].concat(elements || [])
    .sort(new Intl.Collator().compare);
}

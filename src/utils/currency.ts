import { DEFAULT_LOCALE } from 'constants/locale';

export function formatCurrency(value: number) {
  return new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(value);
}

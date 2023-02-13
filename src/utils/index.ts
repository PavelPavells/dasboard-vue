import { FullNameProps, IntlDateProps, GetDateProps, FiatCurrencyEnum } from './types';
import { NavigationFailure, useRouter } from 'vue-router';

export const getFullName: FullNameProps = (firstName, lastName) => {
  if (firstName && lastName) return `${firstName} ${lastName}`;

  return firstName || lastName || '';
};

export const currentDate = new Date();
export const dateFrom = new Date(new Date().getFullYear() - 1, 0, 1);

const defaultOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

export const getIntlDate: IntlDateProps = ({
  date,
  options = defaultOptions,
  language = 'en',
  fullDate = true,
}) => {
  const format: Intl.DateTimeFormatOptions = new Intl.DateTimeFormat(language, options)
    .formatToParts(date)
    .reduce((acc, { type, value }) => {
      acc[type] = value;

      return acc;
    }, {} as any);

  if (fullDate) {
    return `${format.year}-${format.month}-${format.day} ${format.hour}:${format.minute}:${format.second}`;
  }

  return `${format.day}.${format.month}.${format.year}`;
};

export const getDate: GetDateProps = ({ date, options, locale = 'de' }) => {
  const newDate = new Date(date);

  return new Intl.DateTimeFormat(locale, options).format(newDate);
};

export const redirectTo = (path: string): Promise<void | NavigationFailure | undefined> => {
  const route = useRouter();

  return route.push(path);
};

export const displayFiatSum = (fiatAmount: string, fiatCurrency: FiatCurrencyEnum): string => {
  const currencies = {
    EUR: '€',
    USD: '$',
    RUB: '₽',
    GBP: '£',
  };

  const curSign = currencies[fiatCurrency];

  return curSign ? `${curSign}${fiatAmount}` : fiatAmount;
};

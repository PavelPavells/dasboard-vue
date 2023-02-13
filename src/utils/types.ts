import { CookieAttributes } from 'js-cookie';

// TODO: replace this
export enum FiatCurrencyEnum {
  EUR = 'EUR',
  RUB = 'RUB',
  USD = 'USD',
  GBP = 'GBP',
  // IDR = 'IDR',
  // JPY = 'JPY',
  // TRY = 'TRY',
  // UAH = 'UAH',
  // NGN = 'NGN',
  // BRL = 'BRL',
  // VND = 'VND',
  // MXN = 'MXN',
  // INR = 'INR',
  // CHF = 'CHF',
  // CZK = 'CZK',
  // DKK = 'DKK',
  // PLN = 'PLN',
  // SEK = 'SEK',
  // BGN = 'BGN',
}

export type BemCSSModulesType = (
  style: { [key: string]: string },
  className: string
) => (...args: any) => string;

export type Platforms = {
  widget: 'widget';
  dashboard: 'dashboard';
  public: 'public';
};

export type CookiesProps = {
  token: string;
  platformsToken: string;
  idleTimeout: number;
};

export type LocationStateProps = {
  login: {
    isResetPassword?: boolean;
    isSetEmail?: boolean;
  };
  widgets: {
    hasToken: boolean;
  };
  transactions: {
    hasToken: boolean;
  };
  account: {
    hasToken: boolean;
  };
};

export type FullNameProps = (firstName?: string, lastName?: string) => string;
export type FooterMenuLink = typeof CONST.infoLinks[number];

export type LocationStateKeys = keyof LocationStateProps;
export type LocationStateValues = LocationStateProps[LocationStateKeys];

export type LocalStorageProps = {
  token: string;
};

export type CookieProps<Key> = {
  setCookie: <U>(
    name: Key,
    value: NonNullable<U>,
    options?: CookieAttributes
  ) => string | undefined;
  getCookie: (name: Key) => ReturnType<typeof JSON.parse>;
  removeCookie: (name: Key, options?: CookieAttributes) => void;
};

export type SubmitButtonProps = {
  email: string;
  password: string;
};

export type ErrorFieldsProps = {
  [key: string]: string;
};

export type GetDateProps = (data: {
  date: Date;
  options: Intl.DateTimeFormatOptions;
  locale: string;
}) => string;

export type IntlDateProps = (data: {
  date: Date;
  options?: Intl.DateTimeFormatOptions;
  language?: string;
  fullDate?: boolean;
}) => string;

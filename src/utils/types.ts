import { CookieAttributes } from 'js-cookie';

export type BemCSSModulesType = (
  style: { [key: string]: string },
  className: string
) => (...args: any) => string;

export type Platforms = 'widget_api' | 'dashbaord_api';

export enum CookieKeys {
  token = 'token',
}

export type LocationStateType = {
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

export type FullNameType = (firstName?: string, lastName?: string) => string;
export type FooterMenuLink = typeof CONST.infoLinks[number];

export type LocationStateKeys = keyof LocationStateType;
export type LocationStateValues = LocationStateType[LocationStateKeys];

export type RedirectToType = <T extends LocationStateKeys>(
  path: T extends LocationStateKeys ? string : T,
  state?: T extends LocationStateKeys ? LocationStateType[T] : LocationStateType[LocationStateKeys]
) => void;

export type LocalStorageType = {
  token: string;
};

export type CookieType<Key = keyof typeof CookieKeys> = {
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

export type ErrorFields = {
  [key: string]: string;
};

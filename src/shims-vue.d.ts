/* eslint-disable */
declare module "*.vue"
declare module "*.ts"

declare module "*.css" {
  const styles: any;
  export default styles;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import Vue, { VueConstructor } from 'vue';
  const content: VueConstructor<Vue>;

  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
type UnwrapPromise<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : T;

declare const IS_DEV: boolean;
declare const IS_LOCAL: boolean;

type AppConfig = {
  apiHost: string;
  apiScheme: string;
  apiUrl: string;
  wssScheme: string;
  apiVersion: string;
  branchKey: string;

  env: string;
  gaId: string;
  websocketUrl: string;
  hostDomain: string;
};

interface Window {
  __APP_CONFIG__: AppConfig;
  Intercom: any;
  requestIdleCallback(
    callback: IdleRequestCallback,
    options?: IdleRequestOptions | undefined
  ): number;
  __APP_CONFIG__: AppConfig;
  Intercom: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  grecaptcha: any;
  idensic: any;
  i18n: any;
  dataLayer: any;
  ga: any;
  branch: any;
  HOST_DOMAIN: any;
  sessionStarted: any;
  applePaySession: any;
  resolveMobilePay: any;
  ApplePaySession: any;
  google: any;
}
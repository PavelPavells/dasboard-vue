/* Global definitions for development */

// for style loader
declare module "*.css" {
  const styles: any;
  export = styles;
}

declare module "*.png" {
  const value: any;
  export default value;
}

// for style loader
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg" {
  const svgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svgComponent;
}

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
type UnwrapPromise<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : T;

type CustomFC<T = unknown> = React.FC<{ className?: string; children?: React.ReactNode } & T>;

declare const IS_DEV: boolean;
declare const IS_LOCAL: boolean;

type AppConfig = {
  apiHost: string;
  apiScheme: string;
  wssScheme: string;
  apiUrl: string;
  apiVersion: string;
  card3dsDomain: string;
  env: string;
  hostDomain: string;
};

interface Window {
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

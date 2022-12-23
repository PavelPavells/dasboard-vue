/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.css" {
  const styles: any;
  export = styles;
}

declare module "*.png" {
  const value: any;
  export default value;
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

type CustomFC<T = unknown> = React.FC<{ className?: string; children?: React.ReactNode } & T>;

declare const IS_DEV: boolean;
declare const IS_LOCAL: boolean;

type AppConfig = {
  apiHost: string;
  apiScheme: string;
  apiUrl: string;
  wssScheme: string;
  apiVersion: string;
  branchKey: string;
  card3dsDomain: string;
  env: string;
  websocketUrl: string;
  hostDomain: string;
};

interface Window {
  __APP_CONFIG__: AppConfig;
  Intercom: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
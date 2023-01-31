// import { BemCSSModulesType } from "./types";
// import { withNaming } from '@bem-react/classname';
// import { createBem } from '@vuebits/bem';

// export const bemClassName = withNaming({ n: '', e: '__', m: '_', v: '_' });

// export const bemCssModules: BemCSSModulesType = (style: any, className: string) => {
//   const bem: any = () => {};

//   return (...args: any): string => {
//     let mixins: any = [];
//     const argsWithoutMixins = args.map((arg: any) => {
//       if (Array.isArray(arg)) {
//         mixins = mixins.concat(arg);
//         return false;
//       }
//       return arg;
//     });
//     const bemResultWithoutMixins = bem(...argsWithoutMixins).split(' ');
//     return bemResultWithoutMixins
//       .map((cn: any) => style[cn] || cn)
//       .concat(mixins)
//       .join(' ');
//   };
// };

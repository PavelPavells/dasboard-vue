import constants from "../utils/const";

declare global {
  const CONST: Readonly<typeof constants>;
}

// if (typeof window.__APP_CONFIG__ === "undefined") {
//   throw new Error("Error");
// }

// const { apiScheme, wssScheme, apiHost, apiVersion } = window.__APP_CONFIG__;

const CONST = {
  // ...window.__APP_CONFIG__,

  nav: {
    root: "/",
    login: "/login",

    widgets: "/widgets",
    edit: "/widgets/edit",
    add: "/widgets/add",
    callbacks: "/widgets/callbacks",
    fees: "/widgets/fees",

    account: "/account",
    transactions: "/transactions",
  },
  intercomAppId: "t3xaiuum",
  infoLinks: [
    {
      text: "Terms",
      link: "/legal/terms",
    },
    {
      text: "Privacy",
      link: "/legal/privacy",
    },
    {
      text: "Cookies policy",
      link: "/legal/cookies",
    },
    {
      text: "Help",
      link: "/help",
    },
  ],
  api: {
    // url: `${apiScheme}://${apiHost}/api-dev/v${apiVersion}`,
    // wss: `${wssScheme}://${apiHost}/api-dev/v${apiVersion}`,
  },
} as const;

export default CONST;

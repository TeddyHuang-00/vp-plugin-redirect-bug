import { defineUserConfig } from "vuepress";
import { redirectPlugin } from "vuepress-plugin-redirect";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vp-plugin-redirect-bug/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    redirectPlugin({
      autoLocale: true,
      localeConfig: {
        "/zh/": ["zh-CN", "zh-TW", "zh"],
        "/en/": ["en-US", "en-UK", "en"],
      },
    }),
  ],
});

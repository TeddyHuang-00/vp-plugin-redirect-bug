# Steps to reproduce

1. Init the repo.

```bash
npm init vuepress-theme-hope vp-plugin-redirect-bug
```

2. Update dependencies.

```bash
npm run docs:update-package
```

3. Install & setup redirect plugin. (Move content of default locale en into a dedicated folder `en/`, and change paths in `navbar/en.ts`, `sidebar/en.ts`, `theme.ts` and `config.ts` accordingly)

```bash
npm i -D vuepress-plugin-redirect
```

```ts
// .vuepress/config.ts
import { redirectPlugin } from "vuepress-plugin-redirect";
// ...

export default defineUserConfig({
  // ...

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
```

4. Run dev server. (Normal, redirect works fine)

```bash
npm run docs:dev
```

5. Build. (Redirect doesn't work, see & compare the generated `dist/index.html` and `dist/intro.html` for example)

```bash
npm run docs:build
```

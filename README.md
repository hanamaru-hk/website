# Hanamaru website

React + Vite implementation of Hanamaru's editorial homepage, with English and Traditional Chinese support through `react-i18next`.

## Development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Structure

- `src/App.jsx` — page components and React-managed interactions
- `src/i18n/` — i18next setup and Traditional Chinese translations
- `src/components/I18nText.jsx` — translated text with safe HTML formatting for the existing rich copy
- `src/styles.css` — the prototype's responsive editorial design

The selected language is remembered in local storage. `?lang=en` and `?lang=zh-Hant` override the saved choice on initial load.

Before launch, replace content marked `PLACEHOLDER` or `TO CONFIRM` and connect the contact form to a real endpoint.

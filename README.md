This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Chrome Extension Iframe UI

This project includes a dedicated iframe-based UI for rendering inside the Chrome extension. The iframe is located at:

`src/app/chrome-extension/iframe/`

### How the iframe works

- The iframe is loaded by the Chrome extension to display interactive UI elements, such as active cases and actions.
- The main entry point is `iframe/page.tsx`, which receives query parameters (e.g., `tkn` for token, `dt` for data) and passes them to the UI.
- The UI logic is handled in `_main/index.tsx`, which renders the list of active cases, allows users to select and join cases, and communicates with the parent extension using `window.parent.postMessage`.
- Styling is managed via `iframe.css` for a seamless embedded experience.

### Integration

To render the UI inside the Chrome extension:

1. The extension loads the iframe from the deployed Next.js app (e.g., `https://your-app.com/chrome-extension/iframe`).
2. Query parameters are passed to the iframe for authentication and data (e.g., `?tkn=TOKEN&dt=ENCODED_DATA`).
3. The iframe UI reads these parameters, decodes the data, and displays the relevant information.
4. User actions (such as joining a case) trigger API calls and send messages back to the parent extension for cache updates and further actions.

#### Example iframe embed code (in Chrome extension):

```html
<iframe src="https://your-app.com/chrome-extension/iframe?tkn=TOKEN&dt=ENCODED_DATA" style="width:100%;height:600px;border:none;"></iframe>
```

### Files of interest

- `src/app/chrome-extension/iframe/page.tsx`: Handles query params and passes data to UI.
- `src/app/chrome-extension/iframe/_main/index.tsx`: Main UI logic and rendering.
- `src/app/chrome-extension/iframe/layout.tsx`: Layout wrapper for iframe content.
- `src/app/chrome-extension/iframe/iframe.css`: Custom styles for iframe UI.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

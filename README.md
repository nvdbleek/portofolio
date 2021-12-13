This is a [Next.js](https://nextjs.org/) project

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## e2e tests

The e2e tests are written using cypress.
You can run them with any of the following commands:

```bash
yarn cypress
yarn cypress:headless

# The following commands start a production build (use `yarn build`)
yarn e2e
yarn e2e:headless
```

## Deploy on Vercel

The App is deployed to [vercel](https://vercel.com/dashboard) when pushed to github using github actions.
On every push the commit is deployed and cypress tests are ran.

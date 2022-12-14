<p align="center"><img src="https://i.imgur.com/a9QWW0v.png"></p>

### Usage

Electron NextJs TailwindCss with Google Universal Analytics (GA4) Integration.

See more lists all of the parameters for the Measurement Protocol: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters

### Notes

Basic example on files: home.tsx, next.tsx.

Following parameters need to be dynamic change on each client:

- tid: Tracking ID/ Web Property ID
- cid: Client ID
- dl: Document Location
- dt: Document Title
- ul: User Language

and more based on what do you need. 

### Create an App

```
# with npx
$ npx create-nextron-app my-app --example with-typescript-tailwindcss

# with yarn
$ yarn create nextron-app my-app --example with-typescript-tailwindcss

# with pnpx
$ pnpx create-nextron-app my-app --example with-typescript-tailwindcss
```

### Install Dependencies

```
$ cd my-app

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```

# WikiHunt ๐

> Hunt your way through Wikipedia links to find **Kevin Bacon** ๐ฅ

<br>

## Features โจ

---

<br>

### Data Fetching and State Management

- Http requests handled via Axios (see services/wikiApi)
- Core state managed with React Context

### UI and Styles

- [Chakra UI](https://chakra-ui.com) - React Component Library was used for the styling
- Dark/Light Modes included (access via navbar and sidebar)
- Custom Logo created via [TailorBrands](https://studio.tailorbrands.com)

### Testing

- Integration tests included in the pages/tests folder
- Uses [Mock Service Worker](https://mswjs.io) to intercept and mock http requests
- Jest and React Testing Library

### Configuration

- Project bootstrapped by `create-next-app`
- Uses Typescript v4.7.2

<br>

## Installation Steps ๐ ๏ธ

---

<br>

### Install Dependencies โ๏ธ

```bash
yarn install
```

### Run Test Suite ๐งช

```bash
yarn test
```

### Launch Application In Development Mode โจ๏ธ

```bash
yarn dev
```

### Build Production Version ๐๏ธ

```bash
yarn build
```

### Launch Application in Production Mode _(Run after Build Step)_ ๐

```bash
yarn start
```

<br>

## Resources ๐

---

- [6 Degrees of Kevin Bacon](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon)
- [Wikipedia API](https://www.mediawiki.org/wiki/API:REST_API/Reference)
- [NextJS Documentation](https://nextjs.org/docs)

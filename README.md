# Megon Site

Static marketing site for Megon, focused on production support for AI-built internal tools.

## Requirements

- Node.js 24 LTS
- Yarn 4.12+

If Corepack is available locally:

```sh
corepack enable
corepack prepare yarn@4.12.0 --activate
```

## Development

```sh
yarn install
yarn dev
```

## Production Build

```sh
yarn build
```

The Firebase hosting target serves the generated `dist/` directory.

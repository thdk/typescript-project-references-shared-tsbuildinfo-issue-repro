# Setup

## Install dependencies

```sh
pnpm install
```

## Run initial build & typecheck

```sh
pnpx turbo typecheck
```

# Reproduction

Run typecheck command for react-app-1

```sh
pnpx turbo typecheck --only --force --filter react-app-1
```

```sh
react-app-1:typecheck: [3:34:13 PM] Project 'tsconfig.build.json' is up to date because newest input 'src/main.tsx' is older than output '../../node_modules/.pnpm/@tsconfig+vite-react@7.0.2/node_modules/@tsconfig/vite-react/node_modules/.tmp/tsconfig.app.tsbuildinfo'
```

Run typecheck command for react-app-2

```sh
pnpx turbo typecheck --only --force --filter react-app-2
```

```sh
# notice how it references files from react-app-1 while we are typecheck react-app-2
react-app-2:typecheck: [3:35:25 PM] Project 'tsconfig.build.json' is out of date because buildinfo file '../../node_modules/.pnpm/@tsconfig+vite-react@7.0.2/node_modules/@tsconfig/vite-react/node_modules/.tmp/tsconfig.app.tsbuildinfo' indicates that file '../react-app-1/src/main.tsx' was root file of compilation but not any more.
```
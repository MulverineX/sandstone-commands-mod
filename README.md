# Sandstone Modded Commands Library
This library depends on the host running a mods that add various commands in [this format](https://github.com/lolgeny/femtoblaze/wiki/Game-events).

Mods:
- [picoblaze](https://github.com/lolgeny/picoblaze) - Fabric mod, adds `ride` (bedrock format), `structure`, `replace` (compose-esque), `gui` (block target forced GUI).

To build the datapack, run:
```ts
npm run build
// or
yarn build
// or
sand build
```

To automatically rebuild the datapack on each change, run:
```ts
npm run watch
// or
yarn watch
// or
sand watch
```


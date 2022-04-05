---
to: "<%= h.dir(name) %>/package.json"
---
{
  "name": "<%= h.package(name) %>",
  "version": "0.0.0",
  "description": "<%= h.config("org") %>'s <%= name %> package",
  "source": "src/index.ts",
    "main": "dist/<%= h.package(name, "-") %>.cjs.js",
    "module": "dist/<%= h.package(name, "-") %>.esm.js",
    "types": "dist/<%= h.package(name, "-") %>.cjs.d.ts",
  "scripts": {
    "clean": "rimraf --no-glob ./dist"
  },
  "files": [
    "dist",
    "src"
  ],
  "sideEffects": false,
  "publishConfig": {
    "access": "public"
  },
  "author": "<%- h.config('author', author) %>",
  "license": "MIT",
  "homepage": "https://github.com/elcharitas/chakra-svelte",
  "repository": {
    "type": "git",
    "url": "https://github.com/elcharitas/chakra-svelte",
    "directory": "<%= h.dir(name) %>"
  },
  "keywords": [
    "emotion",
    "library",
    "svelte",
    "ui",
    "svelte-components",
    "chakra-ui",
    "<%= h.package(name, "-") %>",
    "accessible",
    "components"
  ],
  "dependencies": {
  },
  "peerDependencies": {
    "svelte": "^3.44.0"
  }
}
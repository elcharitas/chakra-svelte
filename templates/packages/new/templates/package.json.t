---
to: "<%= h.package(name) %>/package.json"
---
{
  "name": "<%= h.package(name) %>",
  "version": "0.0.0",
  "description": "<%= h.config("org") %>'s <%= name %> Component",
  "source": "src/index.js",
  "exports": {
    "require": "./index.js",
  },
  "main": "./index.js",
  "types": "./index.d.ts",
  "scripts": {
    "clean": "rimraf --no-glob ./dist",
  },
  "files": [
    "dist",
    "src"
  ],
  "sideEffects": false,
  "publishConfig": {
    "access": "public"
  },
  "author": "<%- h.config('author') %>",
  "license": "MIT",
  "homepage": "https://github.com/elcharitas/chakra-svelte",
  "repository": {
    "type": "git",
    "url": "https://github.com/elcharitas/chakra-svelte",
    "directory": "packages/<%= h.package(name) %>"
  },
  "keywords": [
    "emotion",
    "library",
    "svelte",
    "ui",
    "svelte-components",
    "chakra-ui",
    "accessible",
    "components"
  ],
  "dependencies": {
  },
  "peerDependencies": {
    "svelte": "^3.44.0"
  }
}
---
to: "<%= h.dir(name) %>/README.md"
---
<% pkg = h.package(name) -%>
# <%= pkg %> 

<%= pkg %> is a package for <%= h.config("org") %>.

## Installation

```sh
$ yarn add <%= pkg %>
```

## License

MIT - <%= h.config("author", author) %>.


© 2022
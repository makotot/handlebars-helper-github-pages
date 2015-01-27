# {{github-pages}} [![Build Status](http://img.shields.io/travis/makotot/handlebars-helper-github-pages/master.svg?style=flat)](https://travis-ci.org/makotot/handlebars-helper-github-pages)

> Handlebars helper for adding github pages url.

## Install

```sh
$ npm install handlebars-helper-github-pages --save-dev
```

## Register

In the Gruntfile:
```js
grunt.initConfig({
  assemble: {
    options: {
      ...,
      helpers: ['handlebars-helper-github-pages']
    },
    ...
  },
  ...
});
```

## Usage

```hbs
<a href="{{github-pages}}">Home</a>
```

## License

MIT

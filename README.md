# Larapress

Blank WordPress Theme inspired by Laravel, based on [Underscores](https://underscores.me).

## Requisites

- WordPress ^5.9
- PHP ^7.4
- Node.js ^14.16.1
- NPM ^6.14.12

## Installation

Clone the repo inside the `your-project\wp-content\themes` folder then `cd` to `/larapress`:

```bash
  git clone https://github.com/ojvribeiro/larapress.git larapress
```

```bash
  cd larapress
```

Remove the `.git` folder. Start a new repo if necessary:

```bash
  rm -rf .git
```

```bash
  git init
```

## Installing dependecies

```bash
  npm install
```

## Compiling assets

```bash
  npm run watch
```

Larapress uses Laravel Mix for bundling assets.

## Optimizing for production

```bash
  npm run prod
```

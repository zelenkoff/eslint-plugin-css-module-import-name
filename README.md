# eslint-plugin-import-style

Restrict and control name format of css module import

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-css-module-import-name`:

```sh
npm install eslint-plugin-css-module-import-name --save-dev
```

## Usage

Add `css-module-import-name` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["css-module-import-name"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "css-module-import-name/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->

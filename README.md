# ember-cli-material-components

## ** THIS IS A WORK IN PROGRESS **

This ember-cli addon facilitates the integration of google's [Material Components for the Web](https://material.io/components/web/catalog/) with ember-cli apps.

## Installation
```
ember install ember-cli-material-components
```
You may be required to run the addon's blueprint to install the required dependencies.

```
ember g ember-cli-material-components
```

## Usage 
Specify the following option in your app's `ember-cli-build.js`:

```
var app = new EmberAddon(defaults, {
  sassOptions: {
    includePaths: [
      'node_modules/'
    ]
  }
});
```
Rename `app/styles/app.css` to `app/styles/app.scss`, then import the addon's sass like so:

```
@import 'roboto-fonts';
@import 'material-icons';

$mdc-theme-primary: #607d8b;
$mdc-theme-secondary: #ff3d00;
$mdc-theme-background: #fff;

@import 'ember-cli-material-components';
```

For more on this, see [Theming Guide](https://material.io/components/web/docs/theming/)

## Available Components

### Button

```
{{#mdc-button}}Button{{/mdc-button}}
```

```
{{#mdc-button isRaised=true}}Button{{/mdc-button}}
```

```
{{#mdc-button disabled=true}}Button{{/mdc-button}}
```

```
{{#mdc-button isRipple=true}}Button{{/mdc-button}}
```

### Toolbar

```
{{#mdc-toolbar}}
  {{#mdc-toolbar-row}}
    {{#mdc-toolbar-section}}
      {{#mdc-toolbar-title}}Title{{/mdc-toolbar-title}}
    {{/mdc-toolbar-section}}
  {{/mdc-toolbar-row}}
{{/mdc-toolbar}}
```

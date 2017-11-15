# ember-cli-material-components

## ** THIS IS A WORK IN PROGRESS **

This ember-cli addon facilitates the integration of google's [Material Components for the Web](https://material.io/components/web/catalog/) with ember-cli apps.

## Installation

* `ember install ember-cli-material-components`

## Run the blueprint
* `ember g ember-cli-material-components`

## Available Components

### Button

* Basic button
```
{{#mdc-button}}Button{{/mdc-button}}
```

* Raised button
```
{{#mdc-button isRaised=true}}Button{{/mdc-button}}
```

* Disabled button
```
{{#mdc-button disabled=true}}Button{{/mdc-button}}
```

* Ripple button
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

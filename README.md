### Mixins, functions and variables for SASS

* Install

```
  npm install --save-dev @damenor/sass
    or
  npm i -D @damenor/sass
```

* Import in file .scss

```scss

  /********************************* 
    VARIABLES CUSTOM HERE
  *********************************/

  @import 'YOUR_PATH/node_modules/damenor_sass/index';
```

## DOCS 

### Default Variables

#### Colors
```scss
  $color-theme-primary: #CF649A;
  $color-theme-primary-light: lighten(#CF649A, 5);
  $color-theme-secondary: #37474f;
  $color-theme-light: #ecf0f1;
  $color-theme-danger: #e74c3c;
  $color-theme-info: #2980b9;
  $color-theme-success: #2ecc71;
  $color-theme-warning: #f39c12;
```

#### Container
```scss
  $container-height: calc(100vh - #{$navbar-height} - #{$footer-height});
```

#### Footer
```scss
  $footer-height: 30px;
```

#### Navbar
```scss
  $navbar-height: 48px;
```
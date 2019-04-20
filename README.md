# NativeScript Shadowed Label

<a href="https://www.npmjs.com/package/nativescript-shadowed-label">
    <img src="https://img.shields.io/npm/v/nativescript-shadowed-label.svg" alt="npm">
</a>
<a href="https://www.npmjs.com/package/nativescript-shadowed-label">
    <img src="https://img.shields.io/npm/dt/nativescript-shadowed-label.svg?label=npm%20downloads" alt="npm">
</a>
<a href="https://github.com/tralves/nativescript-shadowed-label/stargazers">
    <img src="https://img.shields.io/github/stars/tralves/nativescript-shadowed-label.svg" alt="stars">
</a>
<a href="https://paypal.me/tralves">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="donate">
</a>

A NativeScript plugin that extends the `<Label>` UI widget by adding the `text-shadow` CSS property.

| shadow examples                     | sample from the [playground](https://play.nativescript.org/?template=play-vue&id=roCIm3) |
| ----------------------------------- | ---------------------------------------------------------------------------------------- |
| ![](images/shadowed-label-demo.png) | ![](images/playing-with-shadows.gif)                                                     |

## Installation

```bash
tns plugin add nativescript-shadowed-label
```

## Usage

After installing the plugin, you can add the shadow to the shadowed label with the CSS syntax:

`text-shadow: <offset-x> <offset-y> <blur-radius> <color>`

E.g.

```css
.shadow1 {
    text-shadow: 1 1 3 blue;
}

.shadow2 {
    text-shadow: 10px 10px 10px rgba(100, 130, 200, 0.8);
}
```

You can also add the text shadow as a property (e.g. `<ShadowedLabel textShadow="1 1 1 #55a">`)

_iOS note: The blur radius appears scatters the shadow more on iOS and on Android._

### NativeScript Plain

<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:shadowedLabel="nativescript-shadowed-label"` on the Page element_

#### XML

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:shadowedLabel="nativescript-shadowed-label">
  <StackLayout class="p-20">
    <shadowedLabel:ShadowedLabel
      class="h1 text-center"
      text="title with CSS shadow"
    />
    <shadowedLabel:ShadowedLabel
      text="color shadow"
      textShadow="2 10 4 rgb(255, 100, 100)"
      fontStyle="italic"
      fontSize="40"
      class="m-b-20 text-center"
    />
    <shadowedLabel:ShadowedLabel
      class="m-t-20 c-black"
      style="text-shadow: 1 1 1 #55a"
      textWrap="true"
      text="Shadow in 'style'!"
    />
  </GridLayout>
</Page>
```

#### CSS

```css
.h1 {
    text-shadow: 2 2 2 #aaa;
    font-weight: bold;
}
```

---

### NativeScript Angular

```typescript
import { registerElement } from 'nativescript-angular/element-registry';
import { ShadowedLabel } from 'nativescript-shadowed-label;
registerElement('ShadowedLabel', () => ShadowedLabel);
```

```html
<ShadowedLabel class="h1 text-center" text="title with CSS shadow" />
<ShadowedLabel
    text="color shadow"
    textShadow="2 10 4 rgb(255, 100, 100)"
    fontStyle="italic"
    fontSize="40"
    class="m-b-20 text-center"
/>
<ShadowedLabel
    class="m-t-20 c-black"
    style="text-shadow: 1 1 1 #55a"
    textWrap="true"
    text="Shadow in 'style'!"
/>
```

---

### NativeScript Vue

```javascript
import Vue from 'nativescript-vue';
Vue.registerElement('ShadowedLabel', () => require('nativescript-shadowed-label').ShadowedLabel);
```

```html
<shadowed-label
    text="color shadow"
    textShadow="2 10 4 rgb(255, 100, 100)"
    fontStyle="italic"
    fontSize="40"
    class="m-b-20 text-center"
/>
```

## License

Apache License Version 2.0, January 2004

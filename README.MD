#  Tempalte for TailwndCss

Using tailwindCss 3.3.1

## Landing Page

```
npm install
```

## TailwindCSS

### On Development

```
npm run build:npx
```

**Output Filepath** `public/assets/css/main.css`

### On Production

```
npm run build:min
```

**Output Filepath** `public/assets/css/main.min.css`

## Image Optimization

Locally I Optimize it and convert it to webp.

I use https://www.npmjs.com/package/imagemin-webp

On Separe location on your computer create a folder `img_to_optimize`

folder structure

```
img_to_optimize/
-> webp.js
-> images/
-> converted/
```

on `webp.js`

```js
const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
imagemin(["images/*.{jpg,png}"], {
  destination: __dirname + "/converted/",
  plugins: [
    imageminWebp({
      quality: 80,
    }),
  ],
}).then(() => {
  console.log("Images optimized");
});
```

Run on CLI

```
node webp.js
```

then you will have a converted images.

> Important Reminder.

> Please check the size of the images that convert

> if its less than the original

> if it has a better optimized image output.

### Application to HTML

```html
<!--- For Simple Image --->
<picture>
  <source srcset="/assets/images/object-01.webp" type="image/webp" />
  <source srcset="/assets/images/object-01.png" />
  <img
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    alt="Smart"
    class="inline-block"
    loading="lazy"
  />
</picture>
```

### Different screen size

```html
<!--- For Image with differnent Screen sizes --->
<picture>
  <source
    media="(min-width: 768px)"
    srcset="/assets/images/object-01.webp"
    type="image/webp"
  />
  <source media="(min-width: 768px)" srcset="/assets/images/object-01.png" />
  <source srcset="/assets/images/object-01-mobile.webp" type="image/webp" />
  <source srcset="/assets/images/object-01-mobile.png" />
  <img
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    loading="lazy"
  />
</picture>
```

### View ports / Screen sizes

this is mobile-first screen sizes

```
"640px", // sm screen
"768px", // md screen
"1024px", // lg screen
"1280px" // xl screen
"1536px" // 2xl screen
```

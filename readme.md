
Just a wrapper to allow images to have various borderRadius for individual corners. It should be a drop-in replacement for the `<Image>`

~~~
      <BorderedImage style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
~~~


<img src="./screenshots/iphone.png" width="250">
<img src="./screenshots/android.png" width="250">


See [the demo](./demo/src/index.js) for examples.

Or preview it in [Expo](https://expo.io/@rborn/react-native-bordered-image-demo)

<img src="./screenshots/expo.png" width="160">

**Unsupported styles**

```
    'borderBottomColor',
    'borderBottomWidth',
    'borderLeftColor',
    'borderLeftWidth',
    'borderRightColor',
    'borderRightWidth',
    'borderTopColor',
    'borderTopWidth',
    'backgroundColor'
```



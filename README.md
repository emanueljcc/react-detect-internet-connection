<h1 align='center'>
  React detect internet connection (custom hook) 📶
</h1>

<p align='center'>
  <a href="https://emanueljcc.github.io/react-detect-internet-connection/" target="_blank">
    <img src="https://i.ibb.co/LYYmFv8/ezgif-1-b07b8de0a8.gif" width="800">
  </a>
</p>

<p align='center'>
  <a href="https://emanueljcc.github.io/react-detect-internet-connection/" target="_blank">
    View Demo
  </a>
</p>

## Description
Library to detect the state of the internet connection in an application with react.js in a dynamic way.

## Install

```bash
npm install react-detect-internet-connection
```
OR
```bash
yarn add react-detect-internet-connection
```

## Usage
Add the react-detect-internet-connection to your main.js for a global import:

```javascript
import React from 'react'

import useNetworkStatus from 'react-detect-internet-connection'

const App = () => {
  // PROPS
  const {
    isOnline,
    updateDate,
    rtt,
    type,
    saveData,
    downlink,
    downlinkMax,
    effectiveType,
  } = useNetworkStatus()

  return (
    <h1>Content...</h1>
  );
}
```

## Documentation

```javascript
const {
    isOnline,
    updateDate,
    rtt,
    type,
    saveData,
    downlink,
    downlinkMax,
    effectiveType,
  } = useNetworkStatus()
```

<p align='center'>
  <a href="https://emanueljcc.github.io/react-detect-internet-connection/" target="_blank">
    <img src="https://i.ibb.co/TTrMggn/Captura-de-Pantalla-2022-04-04-a-la-s-3-37-52-p-m.png" width="800">
  </a>
</p>

SIMPLE 😃

## Support
<a href="mailto:emanuelcastillo9101@gmail.com">emanuelcastillo9101@gmail.com</a>.
You can also send me a direct message on twitter
<a href="https://twitter.com/emanueljcc">@emanueljcc</a>.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/) License © 2022 [Emanuel Castillo](https://github.com/emanueljcc)

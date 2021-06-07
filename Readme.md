# startxlabs-rn-kit

Collection of all day to day UI elements for React Native.

## Installation

If using npm,

```bash
    npm i startxlabs-rn-kit @shopify-restyle
```

or yarn,

```bash
    yarn add startxlabs-rn-kit @shopify-restyle
```

@shopify/restyle is a dependency for startxlabs-rn-kit.

## Components

#### Button

| Props           | Type     | Description                                                                              |
| :-------------- | :------- | :--------------------------------------------------------------------------------------- |
| `variant`       | String   | **Required** Provide three different color schemes ("primary","secondary","transparent") |
| onPress         | Function | **Required** Action to fire when someone tap on the button                               |
| label           | String   | **Required** Text to render for Button                                                   |
| buttonStyle     | Object   | Custom style for button                                                                  |
| buttonTextStyle | Object   | Custom style for button text                                                             |

#### Bottom Sheet

| Props          | Type      | Description                                                |
| :------------- | :-------- | :--------------------------------------------------------- |
| `visible`      | Boolean   | **Required** To toggle sheet                               |
| children       | ReactNode | **Required** Action to fire when someone tap on the button |
| onDismiss      | Function  | **Required** Text to render for Button                     |
| containerStyle | Object    | Custom style for Bottom Sheet                              |
| stripStyle     | Object    | Custom style for Bottom sheet strip                        |

## Documentation

Coming soon...

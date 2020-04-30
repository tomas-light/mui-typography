# mui-typography
 High order component for Material-UI Typography.
 For correct work required "mui-app-theme" >= "1.2.2"

# Installation
```bush
npm install mui-typography
```

# How to use

```tsx
// MyTitle.tsx
import React, { FunctionComponent } from "react";
import { IAppTheme } from "mui-app-theme";
import { Typography } from "mui-typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: IAppTheme) =>({
    title: {
        paddingLeft: 24,
    },
}));

const MyTitle: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Typography
            size={700} 
            color={"strong"}
            bold
            noWrap 
            className={classes.title} 
            component={"p"}
        >
            My Title
        </Typography>
    );
};
```

# You can override default styles

```tsx
// MyAppThemeTypography.ts
import { AppThemeTypography } from "mui-app-theme";

export class MyAppThemeTypography extends AppThemeTypography {
    constructor() {
        super();
        this["100"] = this.createVariant(300, 11, "15px", 0.03333);
    }
}
```

```tsx
// App.tsx
import { createAppTheme } from "mui-app-theme";
import React, { FunctionComponent } from "react";
import { ThemeProvider } from "@material-ui/styles";

import { MyAppThemeTypography } from "./MyAppThemeTypography";

const App: FunctionComponent = () => {
    const appTheme = createAppTheme({ themeTypography: new MyAppThemeTypography() });

    return (
        <ThemeProvider theme={appTheme}>
            {
            // children
            }
        </ThemeProvider>
    );
};
```

# Props

| name | type | default | description |
| ------------- | ------------- | ------------- |------------- |
| `size`  | 50 \| 100 \| 175 \| 200 \| 300 \| 400 \| 700 | 200 | font size |
| `color` | "strong" \| "medium" \| "light" \| "disabled" \| "default" \| "default.text" \| "primary" \| "primary.text" \| "secondary" \| "secondary.text" \| "destructive" \| "destructive.text" | "medium" | font color |
| `className` | string |  | css class name |
| `component` | ElementType | "span" | The component used for the root node. Either a string to use a HTML element or a component. |
| `bold` | boolean | false | If `true` font weight will be `400` |
| `disabled` | boolean | false | If `true` the color will be `default` |
| `noWrap` | boolean | false | If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow) |
| `forwardedRef` | Ref<any> | undefined | The ref is forwarded to the root element. |



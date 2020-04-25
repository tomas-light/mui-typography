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

import { MyColors } from "./MyColors";

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

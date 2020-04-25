# mui-typography
 High order component for Material-UI Typography

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

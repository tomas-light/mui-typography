import { makeStyles } from "@material-ui/styles";
import { IAppTheme } from "mui-app-theme";
import { SizeVariant } from "./SizeVariant";

const allSizes: SizeVariant[] = [
    50,
    100,
    175,
    200,
    300,
    400,
    700,
];

export function sizeClassNameResolver(size: SizeVariant): string {
    return `mui-typography-size-${size}`;
}

function generateSizeStyles(theme: IAppTheme) {
    const styles = {};

    const addSizeStyles = (size: SizeVariant) => ({
        [sizeClassNameResolver(size)]: theme.typography[size],
    });

    allSizes.forEach((size: SizeVariant) => addSizeStyles(size));
    return styles;
}

export const useTypographySizeStyles = makeStyles(
    (theme: IAppTheme) => generateSizeStyles(theme)
);

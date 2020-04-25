import clsx from "clsx";
import { ClassNameMap } from "@material-ui/styles";
import { useThemeColorStyles } from "mui-app-theme";

import { ColorVariant } from "./ColorVariant";
import { SizeVariant } from "./SizeVariant";
import { sizeClassNameResolver, useTypographySizeStyles } from "./useTypographySizeStyles";
import { TypographyClassNameKeys, useTypographyStyles } from "./useTypographyStyles";

export class ClassNameBuilder {
    private readonly classes: ClassNameMap<TypographyClassNameKeys>;
    private readonly colorClasses: ClassNameMap<ColorVariant>;
    private readonly sizeClasses: ClassNameMap;
    private readonly externalClassName?: string;

    private className: string;

    constructor(className?: string) {
        this.classes = useTypographyStyles();
        this.colorClasses = useThemeColorStyles();
        this.sizeClasses = useTypographySizeStyles();
        this.externalClassName = className;

        this.className = this.classes.root;
    }

    public appendColor(disabled: boolean, color: ColorVariant): ClassNameBuilder {
        if (disabled) {
            this.className = clsx(this.className, this.colorClasses.disabled);
        }
        else {
            this.className = clsx(this.className, this.colorClasses[color]);
        }
        return this;
    }

    public appendSize(size: SizeVariant): ClassNameBuilder {
        const sizeClassName = sizeClassNameResolver(size);
        this.className = clsx(this.className, this.sizeClasses[sizeClassName]);
        return this;
    }

    public appendNoWrap(noWrap: boolean): ClassNameBuilder {
        if (noWrap) {
            this.className = clsx(this.className, this.classes.noWrap);
        }
        return this;
    }

    public appendBold(bold: boolean): ClassNameBuilder {
        if (bold) {
            this.className = clsx(this.className, this.classes.noWrap);
        }
        return this;
    }

    public build(): string {
        return clsx(this.className, this.externalClassName);
    }
}

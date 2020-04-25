import React, { ElementType, FunctionComponent, Ref, HtmlHTMLAttributes } from "react";

import { ClassNameBuilder } from "./ClassNameBuilder";
import { ColorVariant } from "./ColorVariant";
import { SizeVariant } from "./SizeVariant";

interface ITypographyProps {
    size?: SizeVariant;
    color?: ColorVariant;
    bold?: boolean;
    disabled?: boolean;
    noWrap?: boolean;

    component?: ElementType;

    forwardedRef?: Ref<any>;
}

type Props = ITypographyProps & HtmlHTMLAttributes<HTMLParagraphElement>;

const Typography: FunctionComponent<Props> = (props) => {
    const {
        children,
        size = 200,
        color = "medium",
        disabled = false,
        noWrap = false,
        bold = false,
        className,
        component,
        forwardedRef,
        ...rest
    } = props;

    const classNameBuilder = new ClassNameBuilder(className);
    const typographyClassName: string = classNameBuilder
        .appendColor(disabled, color)
        .appendSize(size)
        .appendNoWrap(noWrap)
        .appendBold(bold)
        .build();

    const Component = component || "span";
    return (
        <Component
            className={typographyClassName}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </Component>
    );
};

export { Typography, Props as TypographyProps };

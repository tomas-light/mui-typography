import React, { CSSProperties, ElementType, FunctionComponent, Ref } from "react";

import { ClassNameBuilder } from "./ClassNameBuilder";
import { ColorVariant } from "./ColorVariant";
import { SizeVariant } from "./SizeVariant";

interface ITypographyProps {
    size?: SizeVariant;
    color?: ColorVariant;
    bold?: boolean;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    noWrap?: boolean;

    id?: string;
    component?: ElementType;

    forwardedRef?: Ref<any>;
}

type Props = ITypographyProps;

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

export { Typography, ITypographyProps as TypographyProps };

import { themeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";
import Text from "../Texts";
import React, { useRef } from "react";
import { useRipple } from "react-use-ripple";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/router";

const StyledButton = styled(Text)<any>`
   
`

export interface ButtonBaseProps {
  href?: string; 
  children: React.ReactNode;
  textVariant?: themeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  textVariant,
  children,
  styleSheet,
  href,
  ...props
  }: ButtonBaseProps) {

    const router = useRouter();
    const ref = React.useRef();
    const isLink = Boolean(href)
    const Tag = isLink ? 'a' : 'button';
    useRipple(ref, {
      animationLength: 500,
      rippleColor: 'rba(255, 255, 255, 0.7)',

    })

  return(
    <StyledButton 
      tag={Tag} 
      href={href}
      {...props}
      styleSheet = {
        {
          backgroundColor: 'transparent',
          border: 'none',
          color: 'inherit',
          outline: '0',
          cursor: 'pointer',
          textDecoration: 'none',
          ...styleSheet
        }
      }
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);

      }}
      ref={ref} 
    >
      {children}
    </StyledButton>
  );
}

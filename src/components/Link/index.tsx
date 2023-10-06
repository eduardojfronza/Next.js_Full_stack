import Link from "next/link"
import React from "react"
import Text from "../Texts";
import { StyleSheet } from "@src/theme/StyleSheet";
import { themeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
  href?: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: themeTypographyVariants,
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnabled?: boolean;
}

const Links =  React.forwardRef(({ href, children, colorVariant, styleSheet, colorVariantEnabled, ...props }: LinkProps, ref) => {
  const theme = useTheme();
  const isInternalLink = href.startsWith('http');

  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600,

    }
  }

  const linkProps = {
     tag: 'p',
     ref,
     children,
     href,
     styleSheet: {
      textDecoration:'none',
      ...colorVariantEnabled  &&{        
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.hover
        }
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.hover
        }
      },
      ...styleSheet
     },
     ...props
  }

  if(isInternalLink) return (
    <Text 
      {...{
        target: '_blank',
        ...linkProps
      }}
    />
  )

  return(
    <Link href={href} passHref>
      <Text {...linkProps} />
    </Link>
  )
});


Links.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true
}
export default Links;

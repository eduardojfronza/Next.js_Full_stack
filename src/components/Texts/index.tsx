  import React from "react";
  import Theme, { themeTypographyVariants } from "@src/theme/theme";
  import { StyleSheet } from "@src/theme/StyleSheet";
  import { BaseComponent } from "@src/theme/BaseComponent";
  import { useTheme } from "@src/theme/ThemeProvider";


  interface TextsProps{
    variant?: themeTypographyVariants 
    tag?: 'p' | 'span' | 'ul' | 'ol' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string | React.ReactHTMLElement<any>;
    children?: React.ReactNode;
    styleSheet?: StyleSheet,
    ref?: any
  }

  const Text = React.forwardRef(({
      tag,
      styleSheet, 
      variant, 
      ...props}: TextsProps, ref) => {

    const theme = useTheme()
    const textVariant = Theme.typography.variants[variant];    
    return(
      <BaseComponent 
          as={tag}
          styleSheet={{ 
            fontFamily: Theme.typography.fontFamily, 
            ...textVariant, 
            ...styleSheet
          }}
          ref={ref}
          {...props} 
        />
    )
  });


  Text.defaultProps = {
    tag: 'p',
    variant: 'body2'
  }

  export default Text;

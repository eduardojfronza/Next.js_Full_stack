import React from "react";
import styled from "styled-components";
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from "@displaykit/responsive_styles";  

// Defina uma interface para as props de StyledBaseComponent
interface StyledBaseComponentProps {
  styleSheet?: StyleSheet; // Uma propriedade styleSheet opcional
  ref: any
}

// Crie um componente estilizado chamado StyledBaseComponent
const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)} // Aplica estilos usando parseStyleSheet
`;

// Defina o componente BaseComponent
interface BaseComponentProps {
  styleSheet: StyleSheet;
  [key: string]: any
}
export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>((props, ref) => {
  return (
    <StyledBaseComponent ref={ref} {...props} /> // Renderize o StyledBaseComponent com as props
  );
});

// Configure as props padrão para BaseComponent
BaseComponent.defaultProps = {
  styleSheet: {},// A propriedade styleSheet padrão é um objeto vazio
}

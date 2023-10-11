import React from "react";
import { TemplateConfig } from "./withTemplateConfig";

const  TemplateConfigContext = React.createContext<TemplateConfig>({})

interface TemplateConfigProvierProps {
  children: React.ReactNode;
  value: TemplateConfig
}

export function TemplateConfigProvider({ value, children }: TemplateConfigProvierProps) {
  return(
      <TemplateConfigContext.Provider value={value}>
        {children}
      </TemplateConfigContext.Provider>
  );
}

export const useTemplateConfig = () => React.useContext(TemplateConfigContext);

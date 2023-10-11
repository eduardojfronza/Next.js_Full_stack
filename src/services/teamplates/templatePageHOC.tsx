import Head from "next/head";
import { TemplateConfigProvider } from "./templateConfigContext";


interface TemplatePageHOCProps {
  title?: string;

}

export default function teamplatePageHOC(
  Component: (props: any) => JSX.Element, 
  templatePageHOCProps: TemplatePageHOCProps = {},
) {
  return function WrappedComponent(props) {
    return (
      <>
        <Head>
          <title>
            {templatePageHOCProps?.title
             ? `${templatePageHOCProps.title} | ${props.teamplateConfig.site.title} `
             : props.templateConfig.site.title }
          </title>
        </Head>
        <TemplateConfigProvider value={props.teamplateConfig}>
          <Component {...props}/>
        </TemplateConfigProvider>
      </>
    )
  }
}

export {default}  from '@src/pages/Home/Home'
import { withTemplateConfig } from '@src/services/teamplates/withTemplateConfig'

export async function getStaticProps() {
  return{
    props: await withTemplateConfig({
      exemplo: 'teste',
    })
  }
}

 
export {default}  from '@src/pages/Home/Home'
import { withTeamplateConfig } from '@src/services/teamplates/withTeamplateConfig'

export async function getStaticProps() {
  return{
    props: await withTeamplateConfig({
      exemplo: 'teste',
    })
  }
}

 
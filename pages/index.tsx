export {default}  from '@src/pages/Home/Home'
import PostsServices from '@src/services/posts/PostsServices';
import { withTemplateConfig } from '@src/services/teamplates/withTemplateConfig'

export async function getStaticProps() {
  const posts = await PostsServices().getAll();

  return{
    props: await withTemplateConfig({
      posts,
    })
  }
}

     
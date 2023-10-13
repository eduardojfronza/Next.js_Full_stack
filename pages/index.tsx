export {default}  from '@src/pages/Home/Home'
import PostsServices from '@src/services/posts/PostsServices';
import { withTemplateConfig } from '@src/services/teamplates/withTemplateConfig'

export async function getStaticProps() {

  const posts = await PostsServices().getAll();
  console.log('Post', posts.length)

  return{
    props: await withTemplateConfig({
      posts,
      exemplo: 'teste',
    })
  }
}

     
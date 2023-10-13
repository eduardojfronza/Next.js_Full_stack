import path from "path";
import fs from 'fs/promises';
import matter from 'gray-matter'

export interface Post {
  metadata: {
    date: string;
    url: string;
    excerpt: string;
    tags: string[];
  };
  image?: string;
  title: string;
  content: string;
  slug: string;


}

export default function PostsServices(){
  return {
    async getAll(): Promise<Post[]> {
      const PATH_POST = path.resolve(".", "_data","posts");
      const postFiles = await fs.readdir(PATH_POST, {encoding: "utf-8"});
      
      const postsPromisse = postFiles.map(async (postFileName) => {
        const filePath = path.join(PATH_POST, postFileName)
        const postFile = await fs.readFile(filePath, {encoding: 'utf-8'})

        // Para extrair o conteudo do markdown
        const { data, content } = matter(postFile)

        // output
        const post: Post  = {
          metadata: {
            date: new Date(data.date).toISOString(),
            excerpt: data.excerpt,
            tags: data.tag,
            url: data.url
          },
          image: data.image || "", 
          title: data.title,
          content,
          slug: postFileName.replace(".md", ""),
        }

        return post;
      });
      const posts = Promise.all(postsPromisse)
      return posts
    }
  }
}

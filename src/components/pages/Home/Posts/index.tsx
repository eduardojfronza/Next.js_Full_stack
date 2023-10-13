import Box from "@src/components/box/Box";
import Text from "@src/components/Texts";
import type { Post } from "@src/services/posts/PostsServices";
import { FeedPost } from "./Post";

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }:PostsProps) {
  return(
    <Box>
      <Text variant="heading4" styleSheet={{ marginBottom: '27px' }}> 
        Últimas atualizações
      </Text>
      {posts.map(({ content, metadata, slug, title, image }) =>{
        const {date, excerpt, url, tags} = metadata;

        return (
          <FeedPost 
            key={slug} 
            title={title}
            date={date}
            excerpt={excerpt}
            tags={tags}
            url={url}
            image={image}
          />
        )
      })}
      
    </Box>
  )
}

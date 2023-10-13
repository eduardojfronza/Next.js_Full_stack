import Box from "@src/components/box/Box";
import Background from "@src/components/pages/Home/Background";
import Feed from "@src/components/pages/Home/Feed";
import Footer from "@src/components/pages/Home/Footer";
import Header from "@src/components/pages/Home/Header";
import Menu from "@src/components/pages/Home/Menu";
import Posts from "@src/components/pages/Home/Posts";
import type { Post } from "@src/services/posts/PostsServices";
import teamplatePageHOC from "@src/services/teamplates/templatePageHOC";
import { useTheme } from "@src/theme/ThemeProvider";

interface HomeProps {
  posts: Post[]
}

function Home(props: HomeProps) {
  const theme = useTheme();
  return(
    <>
      <Box
        tag='main'
        styleSheet={{
          backgroundColor: theme.colors.neutral.x000,
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Background />
        <Menu />
          <Feed>
            <Header />
            <Posts posts={props.posts}/>
          </Feed>
        <Footer />
      </Box>
    </>
  )    
}

export default teamplatePageHOC(Home, {
  title: 'Home',
})

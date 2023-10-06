import Box from "@src/components/box/Box";
import Background from "@src/components/pages/Home/Background";
import Feed from "@src/components/pages/Home/Feed";
import Footer from "@src/components/pages/Home/Footer";
import Header from "@src/components/pages/Home/Header";
import Menu from "@src/components/pages/Home/Menu";
import Posts from "@src/components/pages/Home/Posts";
import Text from "@src/components/Texts";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Home() {
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
          </Feed>
        <Footer />
      </Box>
    </>
  )    
}

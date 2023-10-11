import Box from "@src/components/box/Box";
import Background from "@src/components/pages/Home/Background";
import Feed from "@src/components/pages/Home/Feed";
import Footer from "@src/components/pages/Home/Footer";
import Header from "@src/components/pages/Home/Header";
import Menu from "@src/components/pages/Home/Menu";
import teamplatePageHOC from "@src/services/teamplates/teamplatePageHOC";
import { useTheme } from "@src/theme/ThemeProvider";

function Home(props) {
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

export default teamplatePageHOC(Home, {
  title: 'Home',
})

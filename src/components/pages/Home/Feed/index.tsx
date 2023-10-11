import Box from "@src/components/box/Box";
import Text from "@src/components/Texts";
import React from "react";
import { useTheme } from "@src/theme/ThemeProvider";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({children}:FeedProps ){
  const theme = useTheme();
  return(
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',
      }}
    >
      {children}
    </Box>
  )
}



Feed.Posts = () => {
  <Box>
    <Text>
      Feed Posts
    </Text>
  </Box>
}

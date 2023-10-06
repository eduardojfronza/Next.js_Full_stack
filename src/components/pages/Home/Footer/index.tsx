import Box from "@src/components/box/Box";
import Text from "@src/components/Texts";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();

  return(
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: '100%',
        height: '120px',
        paddingHorizontal: '24px',
        paddingVertical: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Text variant="body2">
        Feito com ❤️ por Eduardo Fronza
      </Text>
    </Box>
  )
}

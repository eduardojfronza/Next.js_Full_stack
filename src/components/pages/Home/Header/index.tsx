import Image from "@src/components/Image";
import Box from "@src/components/box/Box";
import Text from "@src/components/Texts";
import Button from "@src/components/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/teamplates/templateConfigContext";
import Links from "@src/components/Link";
import Icon from "@src/components/Icon/Icon";

export default function Header() {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();
  return(
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: '24px',
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%',
          }}
          src={templateConfig?.personal?.avatar}
          alt="Imagem de perfil do Eduardo Fronza"
        />

        <Box
          styleSheet={{
            justifyContent: 'space-between',
          }}
        >
          <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'none', md: 'flex'}}}>
            <Button fullWidth colorVariant="primary" size="xl" href="/">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xl"  href="/">Buy me a coffee</Button>
          </Box>
          <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'flex', md: 'none'}}}>
            <Button fullWidth colorVariant="primary" size="xs" href="/">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xs"  href="/">Buy me a coffee</Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
       {templateConfig?.personal?.name}
      </Text>
      
      <Box styleSheet={{
          flexDirection: 'row',
          gap: '4px',
        }}
      >
       {Object.keys(templateConfig.personal.socialNetworks).map(key => {
        const socialNetwork = templateConfig.personal.socialNetworks[key];
        if(socialNetwork) {
          return (
            <Links
              target="_blank"
              href={templateConfig.personal.socialNetworks[key]}
            >
              <Icon name={key as any}/>
            </Links>
          )
        }
        return null
       })}
      </Box>
    </Box>
  )
}

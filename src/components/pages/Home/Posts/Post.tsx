import Icon from "@src/components/Icon/Icon";
import Links from "@src/components/Link";
import Text from "@src/components/Texts";
import Box from "@src/components/box/Box";
import { useTheme } from "styled-components";

interface FeedPostProps {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  tags: string[];
}

export function FeedPost({ title, excerpt, date, tags, url }: FeedPostProps) {
  const theme = useTheme();
  const postDate = new Date(date)
    .toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
    .replace('.', '')
    .replace(/de /g, '');

  return (
    <Box
      styleSheet={{
        position: 'relative',
        paddingBottom: '35px',
      }}
    >
      <Box
        styleSheet={{
          position: 'absolute',
          top: 0, bottom: 0,
          color: theme.colors.neutral.x200,
          marginLeft: '-16px',
        }}
      >
        <Icon
          size="sm"
          name="clockFill"
          styleSheet={{
            transform: {
              xs: 'translateX(-50%) scale(.9)',
              sm: 'translateX(-50%)',
            },
            position: 'absolute',
            top: '-5px',
            left: '0',
            width: '20px',
            zIndex: 90
          }}
        />
        <Box
          styleSheet={{
            top: "16px",
            bottom: "0",
            margin: "auto",
            position: "absolute",
            width: '1px',
            backgroundColor: 'currentColor',
          }}
        />
      </Box>
      <Text
        variant="body4"
        styleSheet={{ fontWeight: 'bold', marginBottom: '32px', marginLeft: '4px' }}
      >
        {postDate}
      </Text>
      {/* Title, Excerpt */}
      <Links
        href={url}
        variant="body1"
        styleSheet={{
          marginBottom: '8px',
          display: 'inline',
        }}
        colorVariantEnabled={false}
      >
        <Box
          tag="span"
          styleSheet={{
            display: 'inline',
            padding: '2px',
            borderRadius: "4px",
            color: theme.colors.neutral.x800,
            backgroundColor: theme.colors.neutral.x200,
            hover: {
              color: theme.colors.primary.x900,
              backgroundColor: theme.colors.primary.x200,
            }
          }}
        >
          {title}
        </Box>
      </Links>
      <Text
        variant="body3"
        styleSheet={{
          marginBottom: '20px'
        }}
      >
        {excerpt}
      </Text>
      {/* Tags */}
      <Box styleSheet={{
        flexDirection: 'row',
        gap: '4px',
      }}>
        
      {tags.map((tag) => {
        return(
        
            <Links
              key={tag}
              href="https://www.linkedin.com/in/eduardo-fronza-49a435233/"
              variant="body4"
              styleSheet={{
                color: theme.colors.neutral.x800,
                backgroundColor: theme.colors.neutral.x100,
                borderRadius: "1000px",
                padding: '6px 8px',
                hover: {
                  color: theme.colors.primary.x900,
                  backgroundColor: theme.colors.primary.x200,
                }
              }}
              colorVariantEnabled={false}
            >
              #{tag}
            </Links>
          
        )
      })}
      </Box>
    </Box>
  )
}

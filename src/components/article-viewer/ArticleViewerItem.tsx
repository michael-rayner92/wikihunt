import type { FC } from 'react';
import { ListItem, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { usePageManager } from '@hooks/index';
import { WikiPageLink } from '@services/wikiApi';

interface ArticleViewerItemProps {
  linkData: WikiPageLink;
}

export const ArticleViewerItem: FC<ArticleViewerItemProps> = ({ linkData }) => {
  const { getPage } = usePageManager();

  const onSelectHandler = async () => getPage(linkData.title);

  return (
    <ListItem
      key={linkData.title}
      value={linkData.title}
      bg="bg-surface"
      p="4"
      boxShadow={mode('sm', 'sm-dark')}
      position="relative"
      borderRadius="lg"
      cursor="pointer"
      transition="0.3s ease-in"
      _hover={{ transform: 'scale(1.02)' }}
      onClick={onSelectHandler}
      data-testid={`random-pages-item-${linkData.title}`}
      tabIndex={0}
    >
      <Stack shouldWrapChildren spacing="4">
        <Text fontSize="sm" fontWeight="medium" color="emphasized">
          {linkData.title}
        </Text>
      </Stack>
    </ListItem>
  );
};

ArticleViewerItem.displayName = 'ArticleViewerItem';

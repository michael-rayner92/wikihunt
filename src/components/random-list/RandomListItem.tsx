import type { FC } from 'react';
import { Stack, Text, useColorModeValue as mode, ListItem } from '@chakra-ui/react';
import { usePageManager } from '@hooks/index';
import type { WikiRandomPagesListItem } from '@services/wikiApi';

interface RandomListItemProps {
  pageData: WikiRandomPagesListItem;
}

export const RandomListItem: FC<RandomListItemProps> = ({ pageData }) => {
  const { getPage, selectedPages } = usePageManager();

  const isSelected = selectedPages[0] === pageData.title;

  const onSelectHandler = async () => getPage(pageData.title);

  return (
    <ListItem
      key={pageData.id}
      value={pageData.id}
      bg="bg-surface"
      p="4"
      boxShadow={mode('sm', 'sm-dark')}
      position="relative"
      borderRadius="lg"
      cursor="pointer"
      transition="0.3s ease-in"
      bgColor={isSelected ? 'Highlight' : 'inherit'}
      _hover={{ transform: 'scale(1.02)' }}
      onClick={onSelectHandler}
      data-testid={`random-pages-item-${pageData.title}`}
      aria-selected={isSelected}
      tabIndex={0}
    >
      <Stack shouldWrapChildren spacing="4">
        <Text fontSize="sm" fontWeight="medium" color={isSelected ? 'white' : 'emphasized'}>
          {pageData.title}
        </Text>
      </Stack>
    </ListItem>
  );
};

RandomListItem.displayName = 'RandomListItem';

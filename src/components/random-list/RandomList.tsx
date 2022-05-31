import type { FC } from 'react';
import { Box, List, Spinner, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { usePageManager } from '@hooks/index';
import { RandomListItem } from './RandomListItem';

export const RandomList: FC = () => {
  const { loadingPages, pages } = usePageManager();
  const isLoading = loadingPages === 'idle' || loadingPages === 'fetching';

  return (
    <Box as="section" py={{ base: '4', md: '8' }}>
      <Box
        px={{ base: '4', md: '6' }}
        py={{ base: '5', md: '6' }}
        bg="bg-surface"
        borderRadius="lg"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        {isLoading ? (
          <Stack p="28">
            <Spinner
              mx="auto"
              thickness="4px"
              speed="0.75s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              data-testid="loading-pages-spinner"
            />
          </Stack>
        ) : (
          <Stack spacing="5" flex="1">
            <Stack spacing="1">
              <Text fontSize="lg" fontWeight="medium">
                Starting Page
              </Text>
              <Text color="muted" fontSize="sm">
                Select one of the following options to begin your hunt. Choose wisely.
              </Text>
            </Stack>
            <List listStyleType="none" aria-label="random-pages">
              <Stack spacing="3" width="full">
                {pages.map(page => (
                  <RandomListItem key={page.id} pageData={page} />
                ))}
              </Stack>
            </List>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

RandomList.displayName = 'RandomList';

import type { FC } from 'react';
import { Box, List, Spinner, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { usePageManager } from '@hooks/index';
import { ArticleViewerItem } from './ArticleViewerItem';

export const ArticleViewer: FC = () => {
  const { loadingPage, page } = usePageManager();
  const isIdle = loadingPage === 'idle';
  const isFetching = loadingPage === 'fetching';

  const subLinkCount = page?.links.length;
  const boxShadow = useColorModeValue('sm', 'sm-dark');

  return !isIdle ? (
    <Box as="section" py={{ base: '4', md: '8' }}>
      <Box
        px={{ base: '4', md: '6' }}
        py={{ base: '5', md: '6' }}
        bg="bg-surface"
        borderRadius="lg"
        boxShadow={boxShadow}
      >
        {isFetching ? (
          <Stack p="28">
            <Spinner
              mx="auto"
              thickness="4px"
              speed="0.75s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              data-testid="loading-page-spinner"
            />
          </Stack>
        ) : (
          <Stack spacing="5" flex="1">
            <Stack spacing="1">
              <Text fontSize="lg" fontWeight="medium">
                {page?.title}
              </Text>
              {page?.shortDescription && (
                <Text color="muted" fontSize="sm">
                  {page?.shortDescription}
                </Text>
              )}
              <Text color="blue.500" fontSize="sm">
                Total WikiLinks: {subLinkCount}
              </Text>
            </Stack>
            <List
              listStyleType="none"
              maxH="30rem"
              overflowY="auto"
              overflowX="hidden"
              css={{
                '&::-webkit-scrollbar': { width: '6px' },
                '&::-webkit-scrollbar-track': { width: '6px', background: '#eee' },
                '&::-webkit-scrollbar-thumb': { background: '#3182CE', borderRadius: '24px' }
              }}
            >
              <Stack spacing="3" width="full">
                {page?.links.map(link => (
                  <ArticleViewerItem key={link.title} linkData={link} />
                ))}
              </Stack>
            </List>
          </Stack>
        )}
      </Box>
    </Box>
  ) : null;
};

ArticleViewer.displayName = 'ArticleViewer';

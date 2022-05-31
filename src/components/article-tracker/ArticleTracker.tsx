import type { FC } from 'react';
import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react';
import { usePageManager } from '@hooks/usePageManager';
import { Step } from './Step';

export const ArticleTracker: FC = () => {
  const { selectedPages } = usePageManager();
  const pagesCount = selectedPages.length;

  return (
    <Box as="section" py={{ base: '4', md: '8' }}>
      <Box
        px={{ base: '4', md: '6' }}
        py={{ base: '5', md: '6' }}
        bg="bg-surface"
        borderRadius="lg"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', md: '8' }}>
          <Stack direction="column" spacing="4">
            {Array.from({ length: 6 }, (_, index) => (
              <Step
                key={index}
                title={`Article ${index + 1}`}
                description={selectedPages[index]}
                isActive={pagesCount === index + 1}
                isCompleted={pagesCount > index + 1}
                currentCount={pagesCount}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

ArticleTracker.displayName = 'ArticleTracker';

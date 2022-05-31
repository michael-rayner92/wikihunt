import type { FC } from 'react';
import {
  Box,
  Heading,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
import { FiMoreVertical, FiCheckCircle } from 'react-icons/fi';
import { usePageManager } from '@hooks/usePageManager';

const getCounterColor = (currentCount: number) => {
  if (currentCount <= 3) return 'success';
  if (currentCount <= 5) return 'orange.500';
  return 'error';
};

export const LinkCounter: FC = () => {
  const { selectedPages } = usePageManager();

  const currentCount = selectedPages.length;
  const counterColor = getCounterColor(currentCount);

  return (
    <Box as="section" py={{ base: '4', md: '8' }}>
      <Box
        px={{ base: '4', md: '6' }}
        py={{ base: '5', md: '6' }}
        bg="bg-surface"
        borderRadius="lg"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Stack spacing={{ base: '5', md: '6' }}>
          <Stack direction="row" justify="space-between">
            <HStack spacing="4">
              <Square size="12" bg="bg-accent-subtle" borderRadius="md">
                <Icon as={FiCheckCircle} boxSize="6" color="on-accent" />
              </Square>
              <Text fontWeight="medium">Guess Tracker</Text>
            </HStack>
            <Icon as={FiMoreVertical} boxSize="5" color="muted" />
          </Stack>
          <Stack spacing="4">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })} color={counterColor}>
              {currentCount} / 6
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

LinkCounter.displayName = 'LinkCounter';

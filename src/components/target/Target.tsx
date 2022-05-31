import type { FC } from 'react';
import {
  Box,
  Heading,
  HStack,
  Icon,
  Link,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
import { FiMoreVertical, FiTarget, FiExternalLink } from 'react-icons/fi';

const cardData = {
  label: 'Your Target',
  value: 'Kevin Bacon',
  wikiLink: 'https://en.wikipedia.org/wiki/Kevin_Bacon',
  wikiLinkTitle: 'Kevin Bacon Wikipedia Page',
  externalLinkText: 'Who is Kevin Bacon?'
};

export const Target: FC = () => {
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
                <Icon as={FiTarget} boxSize="6" color="on-accent" />
              </Square>
              <Text fontWeight="medium">{cardData.label}</Text>
            </HStack>
            <Icon as={FiMoreVertical} boxSize="5" color="muted" />
          </Stack>
          <Stack spacing="4">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>{cardData.value}</Heading>
            <Link
              href={cardData.wikiLink}
              title={cardData.wikiLinkTitle}
              rel="noreferrer noopener"
              _hover={{ textDecoration: 'none' }}
              isExternal
            >
              <HStack
                spacing="1"
                fontWeight="medium"
                color="muted"
                transition="color 0.15s ease-in-out"
                _hover={{ color: '#3182CE' }}
              >
                <Icon as={FiExternalLink} boxSize="5" />
                <Text>{cardData.externalLinkText}</Text>
              </HStack>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

Target.displayName = 'Target';

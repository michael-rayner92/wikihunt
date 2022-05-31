import type { FC } from 'react';
import { Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Logo } from '@components/logo';

interface FailModalBody {
  onReset: () => Promise<void>;
}

export const FailModalBody: FC<FailModalBody> = ({ onReset }) => {
  return (
    <Flex direction="column" align="center" flex="1" py="12" px={{ base: '4', md: '6' }}>
      <Box maxW="sm" mx="auto">
        <Logo height="6" color={useColorModeValue('blue.500', 'blue.200')} mx="auto" />
        <Box textAlign="center" maxW={{ base: '2xs', sm: 'xs' }} mx="auto" mt="10">
          <Heading fontWeight="extrabold">Better Luck Next Time</Heading>
          <Text fontSize="lg" mt="2">
            Didn&apos;t get there this time?
            <Box as="strong" whiteSpace="nowrap">
              You can always try again
            </Box>
            <Button colorScheme="blue" size="lg" mt="5" onClick={onReset}>
              Try Again
            </Button>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

FailModalBody.displayName = 'FailModalBody';

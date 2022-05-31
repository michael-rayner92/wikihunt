import type { FC } from 'react';
import { Box, BoxProps, Stack, Text } from '@chakra-ui/react';

const getStatusColor = (currentCount: number, isActive: boolean, isCompleted: boolean) => {
  if (currentCount >= 6) return 'error';
  if (isActive || isCompleted) return 'accent';
  return 'inherit';
};

interface StepProps extends BoxProps {
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  currentCount: number;
}

export const Step: FC<StepProps> = props => {
  const { title, description, isActive, isCompleted, currentCount } = props;
  const borderColor = getStatusColor(currentCount, isActive, isCompleted);

  return (
    <Box
      flex="1"
      py={{ base: '2', md: '3' }}
      ps={{ base: '3', md: '0' }}
      borderTopWidth={{ base: '0', md: '4px' }}
      borderLeftWidth={{ base: '4px', md: '0' }}
      borderColor={borderColor}
      data-testid={`article-tracker-step-${title}`}
    >
      <Stack spacing="0.5">
        <Text color="emphasized" fontWeight="medium">
          {title}
        </Text>
        <Text color="muted">{description}</Text>
      </Stack>
    </Box>
  );
};

Step.displayName = 'Step';

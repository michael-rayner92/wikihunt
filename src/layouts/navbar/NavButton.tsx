import type { FC } from 'react';
import { As, Button, ButtonProps, HStack, Icon, Text } from '@chakra-ui/react';

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
}

export const NavButton: FC<NavButtonProps> = props => {
  const { icon, label, ...buttonProps } = props;
  return (
    <Button variant="ghost" justifyContent="start" {...buttonProps}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};

NavButton.displayName = 'NavButton';

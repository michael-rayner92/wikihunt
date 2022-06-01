import type { FC } from 'react';
import { Button, HStack, Icon, Text, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ThemeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const icon = isDark ? FiSun : FiMoon;

  return (
    <Button variant="ghost" justifyContent="start" onClick={toggleColorMode}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>Select Theme</Text>
      </HStack>
    </Button>
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';

import type { FC } from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ThemeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const icon = isDark ? <FiSun fontSize="1.25rem" /> : <FiMoon fontSize="1.25rem" />;

  return <IconButton icon={icon} aria-label="Theme Toggle" onClick={toggleColorMode} />;
};

ThemeToggle.displayName = 'ThemeToggle';

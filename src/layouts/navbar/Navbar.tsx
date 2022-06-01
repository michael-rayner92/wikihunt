import type { FC } from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { FiHelpCircle, FiSearch, FiSettings } from 'react-icons/fi';
import { Logo } from '@components/logo';
import { globalEnvs } from '@config/globals';
import { Sidebar } from '../sidebar/Sidebar';
import { ThemeToggle } from './ThemeToggle';
import { ToggleButton } from './ToggleButton';

const { currentUser } = globalEnvs;

export const Navbar: FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <Container py={{ base: '3', lg: '4' }}>
        <Flex justify="space-between">
          <HStack spacing="4">
            <Logo mb="2" />
            {isDesktop && (
              <ButtonGroup variant="ghost" spacing="1">
                <Button>Home</Button>
                <Button aria-current="page">Dashboard</Button>
                <Button>Scores</Button>
                <Button>Bookmarks</Button>
                <Button>Users</Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup variant="ghost" spacing="1">
                <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
                <ThemeToggle />
              </ButtonGroup>
              <Avatar boxSize="10" name={currentUser.name} src={currentUser.avatarUrl} />
            </HStack>
          ) : (
            <>
              <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap
                trapFocus
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

Navbar.displayName = 'Navbar';

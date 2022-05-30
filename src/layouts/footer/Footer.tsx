import type { FC } from 'react';
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Logo } from '@components/logo';
import { globalEnvs } from '@config/globals';

export const Footer: FC = () => (
  <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href={globalEnvs.externalLinks.linkedIn}
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href={globalEnvs.externalLinks.github}
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Michael Rayner. All rights reserved.
      </Text>
    </Stack>
  </Container>
);

Footer.displayName = 'Footer';

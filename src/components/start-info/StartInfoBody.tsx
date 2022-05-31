import type { FC } from 'react';
import { chakra, Link, ModalBody, Text } from '@chakra-ui/react';

export const StartInfoBody: FC = () => {
  return (
    <ModalBody pb={6}>
      <Text>
        Wikihunt is a game that tests your knowledge of how everything relates. Work your way
        through Wikipedia articles jumping from <chakra.em>wikilink</chakra.em> to&nbsp;
        <chakra.em>wikilink</chakra.em> while avoiding <chakra.em>stub articles</chakra.em> on your
        way to find Kevin Bacon.
      </Text>
      <Text my="3">
        This game is inspired by the parlor game&nbsp;
        <Link href="https://tinyurl.com/2p8raej6" color="blue.500" isExternal>
          Six Degrees of Seperation
        </Link>
        &nbsp; or more recently,&nbsp;
        <Link href="https://tinyurl.com/4kj4yyzv" color="blue.500" isExternal>
          Six Degress of Kevin Bacon
        </Link>
        &nbsp;where players try to link one actor back to Kevin Bacon in the shortest path possible.
      </Text>
    </ModalBody>
  );
};

StartInfoBody.displayName = 'StartInfoBody';

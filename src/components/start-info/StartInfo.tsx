import type { FC } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { StartInfoBody } from './StartInfoBody';

export const StartInfo: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onStartHandler = () => {
    console.log('Start The Game!!!');
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent top="10">
          <ModalHeader color="blue.500">Welcome to Wikihunt</ModalHeader>
          <StartInfoBody />
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onStartHandler}>
              Let&apos;s Play
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

StartInfo.displayName = 'StartInfo';

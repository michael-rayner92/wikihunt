import type { FC } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import type { UseDisclosureProps } from '@chakra-ui/react';
import { usePageManager } from '@hooks/usePageManager';
import { StartInfoBody } from './StartInfoBody';

interface StartInfoProps {
  isOpen: UseDisclosureProps['isOpen'];
  onClose: UseDisclosureProps['onClose'];
}

export const StartInfo: FC<StartInfoProps> = ({ isOpen, onClose }) => {
  const { getPages } = usePageManager();

  const onCloseHandler = () => onClose?.();

  const onStartHandler = async () => {
    onCloseHandler();
    await getPages();
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={!!isOpen} onClose={onCloseHandler} size="xl">
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

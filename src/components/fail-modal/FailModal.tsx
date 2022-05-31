import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Flex, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { usePageManager } from '@hooks/usePageManager';
import { FailModalBody } from './FailModalBody';
import { FailModalImage } from './FailModalImage';

export const FailModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedPages, resetPages } = usePageManager();

  const onResetHandler = async () => {
    await resetPages();
    setIsOpen(false);
  };

  const onCloseHandler = () => setIsOpen(false);

  useEffect(() => {
    if (selectedPages.length < 6) return;
    setIsOpen(true);
  }, [selectedPages]);

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onCloseHandler}
      isCentered
      size="5xl"
    >
      <ModalOverlay />
      <ModalContent borderRadius="none" mx="4">
        <ModalBody padding="0">
          <Flex align="center">
            <FailModalImage />
            <FailModalBody onReset={onResetHandler} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

FailModal.displayName = 'FailModal';

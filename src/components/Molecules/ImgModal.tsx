import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  name: string;
  description: string;
}

export const ImgModal: React.FC<Props> = (props) => {
  const { isOpen, onClose, name, description } = props;
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="6">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <Text as="h3" fontSize={20} textAlign="center">
            {name}
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

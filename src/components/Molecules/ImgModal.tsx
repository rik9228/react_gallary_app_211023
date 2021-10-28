import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Img, Text, Stack } from "@chakra-ui/react";
import { fileSizeUnit } from "../../utils/changeUnit";

type Props = {
  source: string;
  createdAt: number;
  fileName: string;
  fileSize: number;
  isOpen: boolean;
  onClose: VoidFunction;
};

export const ImgModal: React.FC<Props> = (props) => {
  const { isOpen, onClose, source, createdAt, fileName, fileSize } = props;
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backgroundColor="#1a1a1a40" />
        <ModalContent>
          <ModalCloseButton color="#fff" />
          <ModalBody p={3}>
            <Stack spacing={3}>
              <Img src={source} />
              <Text>画像名：{fileName}</Text>
              <Text>作成日時：{createdAt}</Text>
              <Text>サイズ：{fileSizeUnit(fileSize)}</Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose} width="100%" pt={0}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

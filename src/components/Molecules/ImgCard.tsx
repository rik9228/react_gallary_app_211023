import { ImgModal } from "./ImgModal";
import { Img } from "../Atoms/Img";

import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";

interface Props {
  info: {
    id: number;
    name: string;
    description: string;
    imgPath: string;
    imgAlt: string;
  };
}

export const ImgCard: React.FC<Props> = (props) => {
  const { info } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack
        p="4"
        w="32%"
        spacing="24px"
        border="1px"
        borderRadius="xl"
        borderColor="gray.200"
        transition="0.4s"
      >
        <Img info={info} onOpen={onOpen} />
        <Button
          bgColor="teal"
          color="white"
          _hover={{
            bgColor: "auto",
            boxShadow: "lg",
          }}
        >
          Delete
        </Button>
      </Stack>

      <ImgModal isOpen={isOpen} onClose={onClose} name={info.name} description={info.description}></ImgModal>
    </>
  );
};

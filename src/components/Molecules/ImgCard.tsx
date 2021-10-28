import { ImgModal } from "./ImgModal";

import { Img } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { imgInfosType } from "../hooks/useFetchImage";

type Props = {
  imgInfo: imgInfosType;
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

export const ImgCard: React.FC<Props> = (props) => {
  const { imgInfo, isOpen, onOpen, onClose } = props;
  return (
    <>
      <Stack
        p="4"
        spacing="24px"
        border="1px"
        borderRadius="xl"
        borderColor="gray.200"
        transition="0.4s"
      >
        <Img src={imgInfo.source} alt="" cursor="pointer" onClick={onOpen} />
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
        <ImgModal
          isOpen={isOpen}
          onClose={onClose}
          source={imgInfo.source}
          createdAt={imgInfo.created}
          fileName={imgInfo.name}
          fileSize={imgInfo.size}
        ></ImgModal>
      </Stack>
    </>
  );
};

// contentType: string;
//   created: number;
//   name: string;
//   size: number;
//   source: string;

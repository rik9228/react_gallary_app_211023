import { ImgModal } from "../Organisims/ImgModal";

import { Img } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { imgInfosType } from "../hooks/useFetchImage";
import { db } from "../../utils/Firebase";
import { useDisclosure } from "@chakra-ui/react";

type Props = {
  imgInfo: imgInfosType;
};

export const ImgCard: React.FC<Props> = (props) => {
  const { imgInfo } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const deleteImage = () => {
  //   db.collection("images").remove({
  //     ...fetchedSource,
  //     ...fetchedFileMetaDatas,
  //   });
  // };

  const deleteUploadedFile = (e: any) => {
    console.log(e.target.parentElement.dataset.id);
  };
  return (
    <>
      <Stack
        p="4"
        spacing="24px"
        border="1px"
        borderRadius="xl"
        borderColor="gray.200"
        transition="0.4s"
        data-id={imgInfo.id}
      >
        <Img src={imgInfo.source} alt="" cursor="pointer" onClick={onOpen} />
        <Button
          onClick={deleteUploadedFile}
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

import { Image } from "@chakra-ui/react";

interface Props {
  info: {
    id: number;
    name: string;
    description: string;
    imgPath: string;
    imgAlt: string;
  };
  onOpen: VoidFunction;
}

export const Img: React.FC<Props> = (props) => {
  const { info, onOpen } = props;
  return (
    <Image
      src={info.imgPath}
      alt={info.imgAlt}
      cursor="pointer"
      onClick={onOpen}
    />
  );
};

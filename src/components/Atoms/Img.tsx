import { Image } from "@chakra-ui/react";

interface Props {
  source: string;
  onOpen: VoidFunction;
}

export const Img: React.FC<Props> = (props) => {
  const { source, onOpen } = props;
  return <Image src={source} alt="" cursor="pointer" onClick={onOpen} />;
};

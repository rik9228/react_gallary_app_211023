import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";

type Props = {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ErrorLabel: React.FC<Props> = (props) => {
  const { setIsError } = props;
  return (
    <Alert status="error" maxW="800px" mx="auto">
      <AlertIcon />
      <AlertTitle mr={2}>画像ファイルを選択してください。</AlertTitle>
      <CloseButton
        onClick={() => setIsError(false)}
        position="absolute"
        right="8px"
        top="8px"
      />
    </Alert>
  );
};

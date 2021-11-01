import { Button } from "@chakra-ui/button";
import { Text, Flex } from "@chakra-ui/layout";
import { auth, provider } from "../../utils/Firebase";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../Providers/AuthProvider";

export const Header = () => {
  const history = useHistory();
  const { user } = useAuthContext();

  const handleLogin = async () => {
    try {
      await auth.signInWithPopup(provider);
      history.push("/myPage");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    if (confirm("ログアウトしますか？")) {
      auth.signOut();
      history.push("/");
    }
  };

  return (
    <Flex
      p={5}
      backgroundColor="teal"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="2xl" as="h1" color="#fff">
        My Image Gallary
      </Text>
      {user ? (
        <Button onClick={handleLogout}>ログアウト</Button>
      ) : (
        <Button onClick={handleLogin}>ログイン</Button>
      )}
    </Flex>
  );
};

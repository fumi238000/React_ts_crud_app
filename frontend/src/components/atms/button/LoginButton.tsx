import { ReactNode, memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading: boolean;
  inputEmailError: string;
  inputPasswordError: string;
};

export const LoginButton: VFC<Props> = memo((props) => {
  const { children, onClick, loading, inputEmailError, inputPasswordError } =
    props;
  return (
    <Button
      bg="blue.500"
      color="white"
      onClick={onClick}
      isLoading={loading}
      isDisabled={!!inputEmailError || !!inputPasswordError}
    >
      {children}
    </Button>
  );
});

import { ReactNode,memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: ()=> void;
  loading: boolean;
  inputPassword: string
  inputEmail: string;
};

export const BlueButton: VFC<Props> = memo((props) => {
  const {children, onClick, loading, inputPassword, inputEmail} = props;
  return (
    <Button
      bg="blue.500"
      color="white"
      onClick={onClick}
      isLoading = {loading}
      isDisabled = {inputEmail === '' || inputPassword === ''}
    >
      {children}
    </Button>
  )
});

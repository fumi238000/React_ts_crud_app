import { ReactNode,memo, VFC } from "react";
import {Button} from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick?: ()=> void;
};

export const BlueButton: VFC<Props> = memo((props) => {
  const {children} = props;
  return (
    <Button bg="blue.500" color="white" _hover={{ opacity: 0.7}}>
      {children}
    </Button>
  )
});
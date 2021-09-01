import { ReactNode,memo, VFC } from "react";
import {Box, Button} from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: ()=> void;
};

export const RedButton: VFC<Props> = memo((props) => {
  const {children, onClick} = props;
  return (
    <Box mt={4} pt={4} align="center">
      <Button
        w="xs"
        bg="red.400"
        color="white"
        onClick={onClick}
      >
      {children}
      </Button>
    </Box>
  )
});

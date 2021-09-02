import { memo, VFC } from "react";
import { Button, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const GoBackButton: VFC = memo(() => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <Box textAlign="left" px={4} py={8} m={4}>
      <Button colorScheme="blue" onClick={onClickBack}>
        戻る
      </Button>
    </Box>
  );
});

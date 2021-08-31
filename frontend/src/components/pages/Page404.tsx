import { Box, Flex, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";


export const Page404: VFC = memo(() => {

  return (
    <>
    <Flex align="center" justify="center" height="60vh">
      <Box>
        <Heading as="h1"
                 size="2xl"
                 textAlign="center"
                 py={4}
        >
          PAGE 404
        </Heading>
        <Box pt={4} align="center">
          <Link to="/posts">TOPへ戻る</Link>
        </Box>
      </Box>
      </Flex>

    </>
)});
  


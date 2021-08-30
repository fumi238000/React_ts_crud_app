import { Flex, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Page404: VFC = memo(() => {
  return (
    <>
    <Flex align="center" justify="center" height="60vh">
      <Heading as="h1"
               size="2xl"
               textAlign="center"
               py={4}
      >
        PAGE 404
      </Heading>
      </Flex>
    </>
)});
  


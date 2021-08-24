import { memo, VFC } from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"

export const MyPage: VFC = memo(() => {

  return (
      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading 
            as="h1"
            size="lg"
            textAlign="center"
            py={4}
          >
            マイページ
          </Heading>
        </Box>
      </Flex>
    
  );
});
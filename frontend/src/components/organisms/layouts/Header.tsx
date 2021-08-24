import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose} = useDisclosure();
  const history = useHistory();
  const onClickLoginPage = useCallback(() => history.push("/login"),[history]);
  const onClickPostIndex = useCallback(() => history.push("/posts"),[history]);
  const onClickPostNew = useCallback(() => history.push("/posts/new"),[history]);
  const onClickMyPage = useCallback(() => history.push("/mypage"),[history]);

  return (
  <>
    <Flex 
      as="nav"
      bg="blue.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{base: 3, md: 5}}
    >
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer"}}>
        <Heading as="h1" fontSize={{base: "md", md: "lg"}}>
          TODOアプリ
        </Heading>
      </Flex>
  
      <Flex 
         align="center"
         fontSize="sm"
         display={{ base: "none", md: "flex"}}
       >
        <Box pr={4}><Link onClick={onClickMyPage}>マイページ</Link></Box> 
        <Box pr={4}><Link onClick={onClickLoginPage}>ログイン画面</Link></Box> 
        <Box pr={4}><Link onClick={onClickPostIndex}>投稿新規作成</Link></Box> 
        <Box><Link onClick={onClickPostNew}>投稿新規作成</Link></Box> 
      </Flex>
      <MenuIconButton onOpen={onOpen}/>
    </Flex>
    
    <MenuDrawer 
      onClose={onClose}
      isOpen={isOpen}
      onClickMyPage={onClickMyPage}
      onClickPostIndex={onClickPostIndex}
      onClickPostNew={onClickPostNew}
      onClickLoginPage={onClickLoginPage}
       />

  </>

  );
});
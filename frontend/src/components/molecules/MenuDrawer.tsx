import { memo, VFC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickMyPage: () => void;
  onClickPostIndex: () => void;
  onClickPostNew: () => void;
  onClickLoginPage: () => void;
  userLoginStatus: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickMyPage,
    onClickPostIndex,
    onClickPostNew,
    onClickLoginPage,
    userLoginStatus,
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.200">
            <p>{userLoginStatus}</p>
            {!userLoginStatus ? (
              <Button w="100%" onClick={onClickLoginPage}>
                ログイン画面
              </Button>
            ) : (
              <>
                <Button w="100%" onClick={onClickMyPage}>
                  マイページ
                </Button>
                <Button w="100%" onClick={onClickPostIndex}>
                  投稿一覧
                </Button>
                <Button w="100%" onClick={onClickPostNew}>
                  投稿新規作成
                </Button>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

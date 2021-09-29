import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box, Center, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { FiChevronDown, FiLogOut, FiSettings, FiUser } from "react-icons/fi";

interface Props {
  userInfo: { name: string; image: string };
}

export default function SidebarUserDropdown({
  userInfo: { name, image },
}: Props) {
  console.log(name);
  return (
    <Box boxShadow="lg" w="300px" h="100vh">
      <Center>
        <Menu>
          <MenuButton
            as={Button}
            size="lg"
            variant="outline"
            width="260px"
            height="65px"
            leftIcon={
              <Avatar
                size="md"
                name={name}
                src={image}
                alt={"your profile picture"}
                ml="-10px"
              />
            }
            rightIcon={<FiChevronDown style={{ marginLeft: "20px" }} />}
          >
            <Text fontSize="xl">{name}</Text>
          </MenuButton>
          <MenuList width="260px">
            <MenuItem icon={<FiUser />}>Account</MenuItem>
            <MenuItem icon={<FiSettings />}>Settings</MenuItem>
            <MenuDivider />
            <MenuItem icon={<FiLogOut />}>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Box>
  );
}

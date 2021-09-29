import { Container, Flex, Heading, Box, VStack } from "@chakra-ui/layout";
import SidebarUserDropdown from "./userDropdown";
import { chakra, StackDivider } from "@chakra-ui/react";
import NavMenu from "./navMenu";

interface Props {
  currentUser: { name: string; image: string };
}

export default function Sidebar({ currentUser: { name, image } }: Props) {
  return (
    <chakra.nav
      boxShadow="lg"
      w="300px"
      minH="100vh"
      position="absolute"
      left="0"
      top="0"
    >
      <Box ml="20px" mt="20px">
        <Flex direction="column" alignItems="self-start">
          <VStack spacing={7} divider={<StackDivider />}>
            <VStack align="flex-start" spacing={7}>
              <Heading fontSize="2xl">BUDGEIT</Heading>
              <SidebarUserDropdown userInfo={{ name, image }} />
            </VStack>
            <NavMenu />
          </VStack>
        </Flex>
      </Box>
    </chakra.nav>
  );
}

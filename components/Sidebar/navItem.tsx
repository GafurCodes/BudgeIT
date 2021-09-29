import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import Link from "next/link";

interface Props {
  text: string;
  icon: JSX.Element;
  href: string;
}

export default function NavItem({ text, icon, href }: Props) {
  return (
    <Button
      leftIcon={icon}
      width="260px"
      justifyContent="flex-start"
      variant="ghost"
    >
      <Text fontSize="md">{text}</Text>
    </Button>
  );
}

import { VStack } from "@chakra-ui/layout";
import NavItem from "./navItem";
import {
  FiBriefcase,
  FiDollarSign,
  FiHome,
  FiTarget,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";

export default function NavMenu() {
  return (
    <VStack>
      <NavItem text={"Home"} icon={<FiHome />} href="/dashboard" />
      <NavItem text={"Budget"} icon={<FiDollarSign />} href="/dashboard" />
      <NavItem text={"Assets"} icon={<FiTrendingUp />} href="/dashboard" />
      <NavItem
        text={"Liabilities"}
        icon={<FiTrendingDown />}
        href="/dashboard"
      />
      <NavItem text={"Net Worth"} icon={<FiBriefcase />} href="/dashboard" />
      <NavItem text={"Goals"} icon={<FiTarget />} href="/dashboard" />
    </VStack>
  );
}

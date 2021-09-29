import SidebarUserDropdown from "./sidebarUserDropdown";

interface Props {
  currentUser: { name: string; image: string };
}

export default function Sidebar({ currentUser: { name, image } }: Props) {
  console.log(name);
  console.log(image);
  return <SidebarUserDropdown userInfo={{ name, image }} />;
}

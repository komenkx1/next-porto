import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { EllipsisVerticalIcon as VerticalDotsIcon } from "@heroicons/react/16/solid";

type Props = {
  menu: Array<any>;
};

export default function AdminActionMenu(props: Props) {
  return (
    <div className="relative flex justify-end items-center gap-2">
      <Dropdown className="bg-background border-1 border-default-200">
        <DropdownTrigger>
          <Button isIconOnly radius="full" size="sm" variant="light">
            <VerticalDotsIcon className="text-default-400" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Table action">
          {props.menu.map((item, index) => (
            <DropdownItem onClick={item.onClick} key={index}>{item.title}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

"use client";
import AdminActionMenu from "@/components/AdminActionMenu";
import TableComp from "@/components/Table";
import { useGetUser } from "@/queries/user.query";
import { useUserStore } from "@/store/user.store";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useCallback, useEffect, useMemo } from "react";

export default function User() {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "TITLE", uid: "title", sortable: true },
    { name: "STATUS", uid: "is_active", sortable: true },
    { name: "Action", uid: "action" },
  ];
  const actionMenu = [
    { title: "Edit", onClick: () => console.log("Edit") },
    { title: "Delete", onClick: () => console.log("Edit") },
    { title: "Disable", onClick: () => console.log("Edit") },
  ];
  const visibleColumns = ["name", "title", "is_active", "action"];
  const statusColorMap: any = {
    active: "primary",
    disabled: "secondary",
  };

  const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Disabled", uid: "disabled" },
  ];

  const customRenderers = useMemo(() => {
    return {
      name: (user: User) => <p>{user.name}</p>,
      is_active: (user: User) => (
        <Chip
          color={
            user.is_active
              ? statusColorMap["active"]
              : statusColorMap["disabled"]
          }
        >
          {user.is_active ? "Active" : "Disabled"}
        </Chip>
      ),
      action: (user: User) => (
        <div className="">
          <AdminActionMenu menu={actionMenu} />
        </div>
      ),
    };
  }, []);
  const { isLoading: isUsersLoading, data: data } = useGetUser();
  const { users: users } = useUserStore();

  return (
    <>
      <TableComp
        columns={columns}
        users={users ?? []}
        visibleColumns={visibleColumns}
        customRenderers={customRenderers}
        statusOptions={[]}
      />
    </>
  );
}

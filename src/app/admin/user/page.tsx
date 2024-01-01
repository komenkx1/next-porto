"use client";
import AdminActionMenu from "@/components/AdminActionMenu";
import ModalComp from "@/components/Modal";
import TableComp from "@/components/Table";
import { useGetUser } from "@/queries/user.query";
import { useUserStore } from "@/store/user.store";
import {
  Chip,
  useDisclosure,
} from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function User() {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "TITLE", uid: "title", sortable: true },
    { name: "STATUS", uid: "is_active", sortable: true },
    { name: "Action", uid: "action" },
  ];
  const actionMenu = [
    { title: "Edit", onClick: () => handleOpen("Edit User") },
    { title: "Delete", onClick: () => handleOpen("Delete User") },
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
  const { isLoading: isUsersLoading } = useGetUser();
  const { users: users } = useUserStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalTitle, setModalTitle] = useState("Create user");
  const handleOpen = (modalTitle: string) => {
    setModalTitle(modalTitle);
    onOpen();
  };

  return (
    <>
      <TableComp
        columns={columns}
        users={users ?? []}
        visibleColumns={visibleColumns}
        customRenderers={customRenderers}
        statusOptions={[]}
        actionAdd={() => handleOpen("Create New User")}
        isLoading={isUsersLoading}
      />
      <ModalComp
        title={modalTitle}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        size="md"
      >
        <div className="form"></div>
      </ModalComp>
    </>
  );
}

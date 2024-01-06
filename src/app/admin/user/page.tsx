"use client";
import AdminActionMenu from "@/components/AdminActionMenu";
import ModalComp from "@/components/Modal";
import TableComp from "@/components/Table";
import {
  useDeleteUser,
  useGetUser,
  useSaveSetActiveUser,
  useSaveUser,
  useUpdateUser,
  useUpdateOrCreateJaronUser,
} from "@/queries/user.query";
import { useUserStore } from "@/store/user.store";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { Button, Chip, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import ModalAlert from "@/components/ModalAlert";

export default function User() {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "TITLE", uid: "title", sortable: true },
    { name: "STATUS", uid: "is_active", sortable: true },
    { name: "Jargon", uid: "jargon" },
    { name: "Action", uid: "action" },
  ];

  const visibleColumns = ["name", "title", "is_active", "jargon", "action"];
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
      jargon: (user: User) => {
        return (
          <div className="">
            <p>{user.jargon?.primary_text ?? "-"}</p>
          </div>
        );
      },
      action: (user: User) => {
        const actionMenu = [
          {
            title: "Jargon",
            onClick: () =>
              handleOpenModalFormJargon("Jargon", user.id, user.jargon),
          },
          {
            title: "Edit",
            onClick: () => handleOpenModalForm("Edit User", true, user),
          },
          { title: "Delete", onClick: () => handleOpenModalAlert(user.id) },
          {
            title: user.is_active ? "Disable" : "Enable",
            onClick: () => handleOpenModalSetActive(user.id),
          },
        ];
        return (
          <div className="">
            <AdminActionMenu menu={actionMenu} />
          </div>
        );
      },
    };
  }, []);
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const { isLoading: isUsersLoading } = useGetUser();
  const { users: users } = useUserStore();
  const [userId, setUserid] = useState<number>(0);
  const {
    isOpen: isOpenModalForm,
    onOpen: openModalForm,
    onClose: closeModalForm,
  } = useDisclosure();
  const {
    isOpen: isOpenAlertModal,
    onOpen: openModalAlert,
    onClose: closeModalAlert,
  } = useDisclosure();

  const {
    isOpen: isOpenSetActiveModal,
    onOpen: openModalSetActive,
    onClose: closeModalSetActive,
  } = useDisclosure();

  const {
    isOpen: isOpenModaljargon,
    onOpen: openModalModaljargon,
    onClose: closeModalModaljargon,
  } = useDisclosure();
  const [modalTitle, setModalTitle] = useState("Create user");
  const handleOpenModalForm = (
    modalTitle: string,
    isEdit: boolean,
    data?: User
  ) => {
    setModalTitle(modalTitle);
    openModalForm();
    if (isEdit && data) {
      setEditMode(true);
      setValue("id", data.id);
      setValue("username", data.username);
      setValue("name", data.name);
      setValue("title", data.title);
      setValue("description", data.description ?? "");
    } else {
      setEditMode(false);
      reset();
    }
  };
  const handleOpenModalFormJargon = (
    modalTitle: string,
    userId: number,
    data?: Jargon
  ) => {
    setModalTitle(modalTitle);
    openModalModaljargon();
    setUserid(userId);
    if (data) {
      setEditMode(true);
      setvalueJargon("id", data.id);
      setvalueJargon("primary_text", data.primary_text);
      setvalueJargon("secondary_text", data.secondary_text);
      setvalueJargon("user_id", userId);
    }
  };

  const handleOpenModalAlert = (setUserId: number) => {
    setUserid(setUserId);
    openModalAlert();
  };
  const handleCloseModalFormJargon = () => {
    closeModalModaljargon();
    resetJargon();
  };
  const handleOpenModalSetActive = (setUserId: number) => {
    setUserid(setUserId);
    openModalSetActive();
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<User>();

  const {
    register: registerFormJargon,
    handleSubmit: submitJargon,
    watch: watchJargon,
    reset: resetJargon,
    setValue: setvalueJargon,
    formState: { errors: errorJargon },
  } = useForm<Jargon>();

  const saveUser = useCallback(
    (data: User) => {
      onSubmit(data);
    },
    [isEditMode]
  );

  const {
    mutate: storeUser,
    isPending: isLoadingSave,
    isSuccess: isSuccessSave,
  } = useSaveUser();
  const {
    mutate: updateJargon,
    isPending: isLoadingJargon,
    isSuccess: isSuccessJargon,
  } = useUpdateOrCreateJaronUser();
  const {
    mutate: removeUser,
    isPending: isLoadingRemove,
    isSuccess: isSuccessRemove,
  } = useDeleteUser();
  const {
    mutate: updateUser,
    isPending: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
  } = useUpdateUser();
  const {
    mutate: saveActiveUser,
    isPending: isLoadingSetActive,
    isSuccess: isSuccessSetActive,
  } = useSaveSetActiveUser();
  const onSubmit: SubmitHandler<User> = async (data) => {
    let dataForm = {};

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("name", data.name);
    formData.append("title", data.title);
    formData.append("description", data.description ?? "");
    formData.append("profileImage", data.profileImage[0] ?? "");
    formData.append("password", data.password ?? "");
    isEditMode ? (dataForm = { value: formData, id: data.id }) : formData;
    isEditMode ? updateUser(dataForm) : storeUser(formData);
  };

  const onSubmitJargon: SubmitHandler<Jargon> = async (data) => {
    data.user_id = userId;
    updateJargon({ id: userId, value: data });
  };

  const resetForm = useCallback(() => {
    reset();
    closeModalForm();
    closeModalAlert();
  }, []);

  const deleteUser = useCallback(() => {
    closeModalForm();
    removeUser(userId);
  }, [userId]);

  const setActiveUser = useCallback(() => {
    closeModalSetActive();
    const data = {
      id: userId,
      is_active: true,
    };
    saveActiveUser(data);
  }, [userId]);

  useEffect(() => {
    if (isSuccessSave || isSuccessRemove || isSuccessUpdate) {
      resetForm();
    }
  }, [isSuccessSave, isSuccessRemove, isSuccessUpdate]);
  return (
    <>
      <TableComp
        columns={columns}
        data={users ?? []}
        visibleColumns={visibleColumns}
        customRenderers={customRenderers}
        statusOptions={[]}
        actionAdd={() => handleOpenModalForm("Create New User", false)}
        isLoading={isUsersLoading}
      />
      <ModalComp
        title={modalTitle}
        isOpen={isOpenModalForm}
        onOpen={openModalForm}
        onClose={closeModalForm}
        size="lg"
      >
        <div className="form">
          <form onSubmit={handleSubmit(saveUser)}>
          <div className="input mb-2">
              <label htmlFor="usernameInput">Username</label>
              <input
                id="usernameInput"
                type="text"
                {...register("username", { required: true })}
                className="c-form-input my-1"
                placeholder="Name"
              />
              {errors.username && (
                <span className="text-sm fw-bold text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="input mb-2">
              <label htmlFor="passwordInput">Password</label>
              <input
                id="passwordInput"
                type="password"
                {...register("password")}
                className="c-form-input my-1"
                placeholder="Password (Optional)"
              />
             
            </div>
            <div className="input mb-2">
              <label htmlFor="nameInput">Name</label>
              <input
                id="nameInput"
                type="text"
                {...register("name", { required: true })}
                className="c-form-input my-1"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-sm fw-bold text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="input mb-2">
              <label htmlFor="titleInput">Title</label>
              <input
                id="titleInput"
                type="text"
                {...register("title", { required: true })}
                className="c-form-input my-1"
                placeholder="Title"
              />
              {errors.title && (
                <span className="text-sm fw-bold text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="input mb-2">
              <label htmlFor="imageProfileInput">Profile Image</label>
              <input
                id="imageProfileInput"
                type="file"
                {...register("profileImage")}
                className="c-form-input my-1"
                placeholder="Upload File"
              />
            </div>
            <div className="input mb-2">
              <label htmlFor="descInput">Description</label>
              <textarea
                id="descInput"
                {...register("description")}
                className="c-form-input my-1"
                placeholder="Description"
              ></textarea>
            </div>

            <ModalFooter className="!px-0">
              <Button type="button" color="danger" onPress={closeModalForm}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {isLoadingSave || isLoadingUpdate ? "Saving..." : "Submit"}
              </Button>
            </ModalFooter>
          </form>
        </div>
      </ModalComp>

      <ModalComp
        title={modalTitle}
        isOpen={isOpenModaljargon}
        onOpen={openModalModaljargon}
        onClose={handleCloseModalFormJargon}
        size="lg"
      >
        <div className="form">
          <form onSubmit={submitJargon(onSubmitJargon)}>
            <div className="input mb-2">
              <label htmlFor="titleInput">Primary Text</label>
              <input
                id="titleInput"
                type="text"
                {...registerFormJargon("primary_text")}
                className="c-form-input my-1"
                placeholder="Primary Text"
              />
            </div>

            <div className="input mb-2">
              <label htmlFor="titleInput">Secondary Text</label>
              <input
                id="titleInput"
                type="text"
                {...registerFormJargon("secondary_text")}
                className="c-form-input my-1"
                placeholder="Secondary Text"
              />
            </div>

            <ModalFooter className="!px-0">
              <Button
                type="button"
                color="danger"
                onPress={handleCloseModalFormJargon}
              >
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {isLoadingSave || isLoadingUpdate ? "Saving..." : "Submit"}
              </Button>
            </ModalFooter>
          </form>
        </div>
      </ModalComp>
      <ModalAlert
        title="Delete User"
        isOpen={isOpenAlertModal}
        onOpen={openModalAlert}
        onClose={closeModalAlert}
        onSubmit={deleteUser}
        description="Are you sure you want to delete this user?"
        size="lg"
      ></ModalAlert>

      <ModalAlert
        title="Delete User"
        isOpen={isOpenSetActiveModal}
        onOpen={openModalSetActive}
        onClose={closeModalSetActive}
        onSubmit={setActiveUser}
        description="Are use sure to active this user?"
        size="lg"
      ></ModalAlert>
    </>
  );
}

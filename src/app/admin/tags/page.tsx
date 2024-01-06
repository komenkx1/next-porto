"use client";
import AdminActionMenu from "@/components/AdminActionMenu";
import ModalComp from "@/components/Modal";
import ModalAlert from "@/components/ModalAlert";
import TableComp from "@/components/Table";
import {
  useDeleteTag,
  useGetTag,
  useSaveTag,
  useUpdateTag,
} from "@/queries/tag.query";
import { useTagStore } from "@/store/tag.store";
import { Button, ModalFooter, Switch, useDisclosure } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Categories() {
  const columns = [
    { name: "ID", uid: "id" },
    { name: "NAME", uid: "name" },
    { name: "Action", uid: "action" },
  ];
  const visibleColumns = ["id", "name", "action"];
  const [modalTitle, setModalTitle] = useState<string>("Create Tag");
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const { refetch, isLoading: isTagLoading } = useGetTag();
  const { tags } = useTagStore();
  const [tagId, setTagid] = useState<number>(0);

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
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Tag>();
  const {
    mutate: storeTag,
    isPending: isLoadingSave,
    isSuccess: isSuccessSave,
  } = useSaveTag();
  const {
    mutate: updateTag,
    isPending: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
  } = useUpdateTag();
  const {
    mutate: removeTag,
    isPending: isLoadingRemove,
    isSuccess: isSuccessRemove,
  } = useDeleteTag();
  const customRenderers = useMemo(() => {
    return {
      name: (tag: Tag) => tag.name,
      action: (tag: Tag) => {
        const actionMenu = [
          {
            title: "Edit",
            onClick: () => handleOpenModalForm("Edit Tag", true, tag),
          },
          { title: "Delete", onClick: () => handleOpenModalAlert(tag.id) },
        ];
        return (
          <div className="">
            <AdminActionMenu menu={actionMenu} />
          </div>
        );
      },
    };
  }, []);

  useEffect(() => {
    if (isSuccessSave || isSuccessRemove || isSuccessUpdate) {
      resetForm();
    }
  }, [isSuccessSave, isSuccessRemove, isSuccessUpdate]);

  //function
  const handleOpenModalAlert = (setTagId: number) => {
    setTagid(setTagId);
    openModalAlert();
  };
  const saveTag = useCallback(
    async (data: Tag) => {
      onSubmit(data);
    },
    [isEditMode]
  );

  const onSubmit: SubmitHandler<Tag> = async (data) => {
    let dataForm = {};
    isEditMode ? (dataForm = { value: data, id: data.id }) : data;
    isEditMode ? updateTag(dataForm) : storeTag(data);
  };

  const resetForm = useCallback(() => {
    reset();
    closeModalForm();
    closeModalAlert();
  }, []);

  const deletetag = useCallback(() => {
    closeModalForm();
    removeTag(tagId);
  }, [tagId]);

  const handleOpenModalForm = (
    modalTitle: string,
    isEdit: boolean,
    data?: Tag
  ) => {
    setModalTitle(modalTitle);
    openModalForm();

    if (isEdit && data) {
      setEditMode(true);
      setValue("id", data.id);
      setValue("name", data.name);
    } else {
      setEditMode(false);
      reset();
    }
  };

  return (
    <>
      <TableComp
        columns={columns}
        data={tags ?? []}
        customRenderers={customRenderers}
        visibleColumns={visibleColumns}
        statusOptions={[]}
        actionAdd={() => handleOpenModalForm("Create New Tag", false)}
        isLoading={isTagLoading}
      />
      <ModalComp
        title={modalTitle}
        isOpen={isOpenModalForm}
        onOpen={openModalForm}
        onClose={closeModalForm}
        size="lg"
      >
        <div className="form">
          <form onSubmit={handleSubmit(saveTag)}>
            <div className="input mb-2">
              <label htmlFor="titleInput">Name</label>
              <input
                id="titleInput"
                type="text"
                {...register("name", { required: true })}
                className="c-form-input my-1"
                placeholder="Tag Name"
              />
              {errors.name && (
                <span className="text-sm fw-bold text-red-500">
                  This field is required
                </span>
              )}
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

      <ModalAlert
        title="Delete Tag"
        isOpen={isOpenAlertModal}
        onOpen={openModalAlert}
        onClose={closeModalAlert}
        onSubmit={deletetag}
        description="Are you sure you want to delete this tag?"
        size="lg"
      ></ModalAlert>
    </>
  );
}

"use client";
import AdminActionMenu from "@/components/AdminActionMenu";
import ModalComp from "@/components/Modal";
import ModalAlert from "@/components/ModalAlert";
import TableComp from "@/components/Table";
import {
  useDeleteCategory,
  useGetCategory,
  useSaveCategory,
  useUpdateCategory,
} from "@/queries/category.query";
import { useCategoryStore } from "@/store/categories.store";
import { Button, ModalFooter, Switch, useDisclosure } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Categories() {
  const columns = [
    { name: "ID", uid: "id" },
    { name: "NAME", uid: "name" },
    { name: "FUTURED", uid: "isFutured" },
    { name: "Action", uid: "action" },
  ];
  const visibleColumns = ["id", "name", , "isFutured", "action"];
  const [modalTitle, setModalTitle] = useState<string>("Create user");
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const { refetch, isLoading: isCategoryLoading } = useGetCategory();
  const { categories } = useCategoryStore();
  const [categoryId, setCategoryid] = useState<number>(0);

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
  } = useForm<Category>();
  const {
    mutate: storeCategory,
    isPending: isLoadingSave,
    isSuccess: isSuccessSave,
  } = useSaveCategory();
  const {
    mutate: updateCategory,
    isPending: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
  } = useUpdateCategory();
  const {
    mutate: removeCategory,
    isPending: isLoadingRemove,
    isSuccess: isSuccessRemove,
  } = useDeleteCategory();
  const customRenderers = useMemo(() => {
    return {
      name: (category: Category) => category.name,
      isFutured: (category: Category) => (
        <>
          {" "}
          <Switch
            color="primary"
            isSelected={category.isFutured}
            onValueChange={(isFutured) => {
              updateCategory({
                value: { isFutured: isFutured },
                id: category.id,
              });
            }}
          >
            Default
          </Switch>
        </>
      ),
      action: (category: Category) => {
        const actionMenu = [
          {
            title: "Edit",
            onClick: () => handleOpenModalForm("Edit User", true, category),
          },
          { title: "Delete", onClick: () => handleOpenModalAlert(category.id) },
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
  const handleOpenModalAlert = (setCategoryId: number) => {
    setCategoryid(setCategoryId);
    openModalAlert();
  };
  const saveCategory = useCallback(
    async (data: Category) => {
      onSubmit(data);
    },
    [isEditMode]
  );

  const onSubmit: SubmitHandler<Category> = async (data) => {
    let dataForm = {};
    isEditMode ? (dataForm = { value: data, id: data.id }) : data;
    isEditMode ? updateCategory(dataForm) : storeCategory(data);
  };

  const resetForm = useCallback(() => {
    reset();
    closeModalForm();
    closeModalAlert();
  }, []);

  const deletecategory = useCallback(() => {
    closeModalForm();
    removeCategory(categoryId);
  }, [categoryId]);

  const handleOpenModalForm = (
    modalTitle: string,
    isEdit: boolean,
    data?: Category
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
        data={categories ?? []}
        customRenderers={customRenderers}
        visibleColumns={visibleColumns}
        statusOptions={[]}
        actionAdd={() => handleOpenModalForm("Create New Category", false)}
        isLoading={isCategoryLoading}
      />
      <ModalComp
        title={modalTitle}
        isOpen={isOpenModalForm}
        onOpen={openModalForm}
        onClose={closeModalForm}
        size="lg"
      >
        <div className="form">
          <form onSubmit={handleSubmit(saveCategory)}>
            <div className="input mb-2">
              <label htmlFor="titleInput">Name</label>
              <input
                id="titleInput"
                type="text"
                {...register("name", { required: true })}
                className="c-form-input my-1"
                placeholder="Category Name"
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
        title="Delete Category"
        isOpen={isOpenAlertModal}
        onOpen={openModalAlert}
        onClose={closeModalAlert}
        onSubmit={deletecategory}
        description="Are you sure you want to delete this category?"
        size="lg"
      ></ModalAlert>
    </>
  );
}

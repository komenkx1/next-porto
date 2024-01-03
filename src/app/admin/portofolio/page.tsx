"use client";
import AdminActionMenu from "@/components/AdminActionMenu";
import CSelect from "@/components/CSelect";
import ModalComp from "@/components/Modal";
import TableComp from "@/components/Table";
import { useGetCategory } from "@/queries/category.query";

import {
  useGetPortofolio,
  useSavePortofolio,
  useUpdatePortofolio,
} from "@/queries/portofolio.query";
import { useGetTag } from "@/queries/tag.query";
import { useGetUser } from "@/queries/user.query";
import { useCategoryStore } from "@/store/categories.store";
import { usePortofolioStore } from "@/store/portofolio.store";
import { useTagStore } from "@/store/tag.store";
import { useUserStore } from "@/store/user.store";
import { Button, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Portofolio() {
  const { portofolio } = usePortofolioStore();
  const { isLoading: isPortofolioLoading } = useGetPortofolio({
    page: 1,
    title: "",
    pageSize: 9999999,
  });
  const columns = [
    { name: "TITLE", uid: "title", sortable: true },
    { name: "USER", uid: "user" },
    { name: "CATEGORY", uid: "category" },
    { name: "Action", uid: "action" },
  ];

  const visibleColumns = ["user", "category", "title", "is_active", "action"];
  const [modalTitle, setModalTitle] = useState<string>("Create user");
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const { users: users } = useUserStore();
  const { categories: categories } = useCategoryStore();
  const { tags: tag } = useTagStore();
  const handleOpenModalForm = (
    modalTitle: string,
    isEdit: boolean,
    data?: Portofolio
  ) => {
    setModalTitle(modalTitle);
    openModalForm();

    if (isEdit && data) {
      setEditMode(true);
    } else {
      setEditMode(false);
      reset();
    }
  };
  const handleOpenModalAlert = () => {};
  const onSubmit: SubmitHandler<Portofolio> = async (data) => {
    console.log(data);
    let dataForm = {};

    const formData = new FormData();

    // isEditMode ? updateUser(dataForm) : storeUser(formData);
  };

  const resetForm = useCallback(() => {
    reset();
    closeModalForm();
    // closeModalAlert();
  }, []);
  const savePortofolio = useCallback(
    (data: Portofolio) => {
      onSubmit(data);
    },
    [isEditMode]
  );
  const customRenderers = useMemo(() => {
    return {
      title: (porto: Portofolio) => <p>{porto.title}</p>,
      category: (porto: Portofolio) => <p>{porto.category.name}</p>,
      user: (porto: Portofolio) => <p>{porto.user.name}</p>,
      action: (porto: Portofolio) => {
        const actionMenu = [
          {
            title: "Edit",
            onClick: () => handleOpenModalForm("Edit Portofolio", true, porto),
          },
          { title: "Delete", onClick: () => handleOpenModalAlert() },
        ];
        return (
          <div className="">
            <AdminActionMenu menu={actionMenu} />
          </div>
        );
      },
    };
  }, []);
  const {
    isOpen: isOpenModalForm,
    onOpen: openModalForm,
    onClose: closeModalForm,
  } = useDisclosure();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Portofolio>();

  const {
    mutate: storeUser,
    isPending: isLoadingSave,
    isSuccess: isSuccessSave,
  } = useSavePortofolio();

  const {
    mutate: updateUser,
    isPending: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
  } = useUpdatePortofolio();
  const { refetch } = useGetUser();
  const { refetch: refecthCategory } = useGetCategory();
  const { refetch: refetchTag } = useGetTag();

  return (
    <>
      <TableComp
        columns={columns}
        data={portofolio ?? []}
        visibleColumns={visibleColumns}
        statusOptions={[]}
        customRenderers={customRenderers}
        actionAdd={() => handleOpenModalForm("Create New Portofolio", false)}
        isLoading={isPortofolioLoading}
      />

      <ModalComp
        title={modalTitle}
        isOpen={isOpenModalForm}
        onOpen={openModalForm}
        onClose={closeModalForm}
        size="lg"
      >
        <div className="form">
          <form onSubmit={handleSubmit(savePortofolio)}>
            <div className="input mb-2">
              <label htmlFor="titleInput">Title</label>
              <input
                id="titleInput"
                type="text"
                {...register("title", { required: true })}
                className="c-form-input my-1"
                placeholder="Portofolio Title"
              />
              {errors.title && (
                <span className="text-sm fw-bold text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="input mb-2">
              <label htmlFor="userInput">User</label>
              <CSelect
                placeholder="Select User"
                items={users ?? []}
                valueFidld="id"
                labelField="name"
                onChange={(selectedOption) =>
                  setValue("user", selectedOption.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              />
              {errors.user && (
                <span className="text-sm fw-bold text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="input mb-2">
              <label htmlFor="categoryInput">Category</label>
              <CSelect
                placeholder="Select Category"
                items={categories}
                valueFidld="id"
                labelField="name"
                onChange={(selectedOption) =>
                  setValue("category", selectedOption.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              />
              {errors.category && (
                <span className="text-sm fw-bold text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="input mb-2">
              <label htmlFor="categoryInput">Tags</label>
              <CSelect
                isMultiple={true}
                placeholder="Select Tag"
                items={tag}
                valueFidld="id"
                labelField="name"
                onChange={(selectedOption) => {
                  const finalvalue: any = [];
                  selectedOption.forEach((element: any) => {
                    finalvalue.push({
                      portofolio: "",
                      tag_id: element.value,
                    });
                  });

                  setValue("portofolioTag", finalvalue, {
                    shouldDirty: true,
                  });
                }}
              />
              {errors.category && (
                <span className="text-sm fw-bold text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="input mb-2">
              <label htmlFor="ThumbnailInput">Thumbnail</label>
              <input
                id="ThumbnailInput"
                type="file"
                {...register("thumbnail")}
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
    </>
  );
}

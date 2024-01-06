"use client";
import AdminActionMenu from "@/components/AdminActionMenu";
import CSelect from "@/components/CSelect";
import ModalComp from "@/components/Modal";
import ModalAlert from "@/components/ModalAlert";
import TableComp from "@/components/Table";
import {
  useDeleteCertificate,
  useGetCertificate,
  useSaveCertificate,
  useUpdateCertificate,
} from "@/queries/certificate.query";
import { useGetUser } from "@/queries/user.query";
import { useCertificateStore } from "@/store/certificate.store";
import { useUserStore } from "@/store/user.store";
import { Button, ModalFooter, Switch, useDisclosure } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SubmitHandler, set, useForm } from "react-hook-form";

export default function Categories() {
  const columns = [
    { name: "ID", uid: "id" },
    { name: "TITLE", uid: "title" },
    { name: "Action", uid: "action" },
  ];
  const visibleColumns = ["id", "title", "action"];
  const [modalTitle, setModalTitle] = useState<string>("Create Certificate");
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const { refetch, isLoading: isCertificateLoading } = useGetCertificate();
  const { isLoading: isUserLoading } = useGetUser();
  const { certificate } = useCertificateStore();
  const [certificateId, setCertificateid] = useState<number>(0);
  const { users: users } = useUserStore();

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
  } = useForm<Certificate>();
  const {
    mutate: storeCertificate,
    isPending: isLoadingSave,
    isSuccess: isSuccessSave,
  } = useSaveCertificate();
  const {
    mutate: updateCertificate,
    isPending: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
  } = useUpdateCertificate();
  const {
    mutate: removeCertificate,
    isPending: isLoadingRemove,
    isSuccess: isSuccessRemove,
  } = useDeleteCertificate();
  const customRenderers = useMemo(() => {
    return {
      name: (certificate: Certificate) => certificate.title,

      action: (certificate: Certificate) => {
        const actionMenu = [
          {
            title: "Edit",
            onClick: () => handleOpenModalForm("Edit User", true, certificate),
          },
          {
            title: "Delete",
            onClick: () => handleOpenModalAlert(certificate.id),
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

  useEffect(() => {
    if (isSuccessSave || isSuccessRemove || isSuccessUpdate) {
      resetForm();
    }
  }, [isSuccessSave, isSuccessRemove, isSuccessUpdate]);

  //function
  const handleOpenModalAlert = (setCertificateId: number) => {
    setCertificateid(setCertificateId);
    openModalAlert();
  };
  const saveCertificate = useCallback(
    async (data: Certificate) => {
      onSubmit(data);
    },
    [isEditMode]
  );

  const onSubmit: SubmitHandler<Certificate> = async (data) => {
    let dataForm = {};
    const formData = new FormData();
    formData.append("user_id", data.user_id.toString());
    formData.append("title", data.title);
    formData.append("thumbnail", data.thumbnail[0]);
    formData.append("description", data.description);
    isEditMode ? (dataForm = { value: formData, id: data.id }) : formData;
    isEditMode ? updateCertificate(dataForm) : storeCertificate(formData);
  };

  const resetForm = useCallback(() => {
    reset();
    closeModalForm();
    closeModalAlert();
  }, []);

  const deletecertificate = useCallback(() => {
    closeModalForm();
    removeCertificate(certificateId);
  }, [certificateId]);

  const handleOpenModalForm = (
    modalTitle: string,
    isEdit: boolean,
    data?: Certificate
  ) => {
    setModalTitle(modalTitle);
    openModalForm();

    if (isEdit && data) {
      setEditMode(true);
      setValue("id", data.id);
      setValue("user_id", data.user_id);
      setValue("title", data.title);
      setValue("description", data.description);
    } else {
      setEditMode(false);
      reset();
    }
  };

  return (
    <>
      <TableComp
        columns={columns}
        data={certificate ?? []}
        customRenderers={customRenderers}
        visibleColumns={visibleColumns}
        statusOptions={[]}
        actionAdd={() => handleOpenModalForm("Create New Certificate", false)}
        isLoading={isCertificateLoading}
      />
      <ModalComp
        title={modalTitle}
        isOpen={isOpenModalForm}
        onOpen={openModalForm}
        onClose={closeModalForm}
        size="lg"
      >
        <div className="form">
          <form onSubmit={handleSubmit(saveCertificate)}>
            <div className="input mb-2">
              <label htmlFor="userInput">User</label>
              <CSelect
                value={watch("user_id")}
                placeholder="Select User"
                items={users ?? []}
                valueField="id"
                labelField="name"
                onChange={(selectedOption) =>
                  setValue("user_id", selectedOption.value, {
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
              <label htmlFor="titleInput">Name</label>
              <input
                id="titleInput"
                type="text"
                {...register("title", { required: true })}
                className="c-form-input my-1"
                placeholder="Certificate Name"
              />
              {errors.title && (
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

      <ModalAlert
        title="Delete Certificate"
        isOpen={isOpenAlertModal}
        onOpen={openModalAlert}
        onClose={closeModalAlert}
        onSubmit={deletecertificate}
        description="Are you sure you want to delete this certificate?"
        size="lg"
      ></ModalAlert>
    </>
  );
}

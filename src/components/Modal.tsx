import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  size: "sm" | "md" | "lg" | "xl" | "full";
  title?: string;
  children: React.ReactNode;
  theme?: "light" | "glass" | "dark";
};

export default function ModalComp({ theme = "light", ...props }: Props) {
  return (
    <>
      <Modal size={props.size} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent
          className={
            theme == "glass"
              ? `bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px]`
              : theme == "dark"
              ? `bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px]`
              : ``
          }
        >
          {(onClose) => (
            <>
              <ModalHeader
                className={`flex flex-col gap-1 ${
                  theme == "light" ? "text-black" : "text-white"
                }`}
              >
                {props.title ?? "Modal Title"}
              </ModalHeader>
              <ModalBody
                className={`${theme == "light" ? "text-black" : "text-white"}`}
              >
                {props.children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

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
};

export default function ModalComp(props: Props) {
  return (
    <>
      <Modal size={props.size} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                {props.title ?? "Modal Title"}
              </ModalHeader>
              <ModalBody className="text-black">{props.children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

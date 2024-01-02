import { Button, ModalFooter, useDisclosure } from "@nextui-org/react";
import ModalComp from "./Modal";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  description?: string;
};

export default function ModalAlert(props: Props) {
  return (
    <>
      <ModalComp
        title={props.title}
        isOpen={props.isOpen}
        onOpen={props.onOpen}
        onClose={props.onClose}
        size={props.size ?? "md"}
      >
        <div className="text">
          {props.description}
          <hr className="my-2" />
          <ModalFooter className="!px-0">
            <Button type="button" color="danger" onPress={props.onClose}>
              Cancel
            </Button>
            <Button type="button" onPress={props.onSubmit} color="primary">
              Submit
            </Button>
          </ModalFooter>
        </div>
      </ModalComp>
    </>
  );
}

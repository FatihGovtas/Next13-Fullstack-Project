"use client";

import { ModalProps } from "@/types";
import { GrClose } from "react-icons/gr";
import { Button } from "..";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  btnLabel,
  title,
  bodyElement,
  footerElement,
}: ModalProps) => {
  const closeFunc = () => {
    onClose();
  };

  const submitFunc = () => {
    onSubmit();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-black bg-opacity-70 fixed flex items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg p-5 w-1/2">
        <div className="flex items-center justify-between  pb-3 mb-3 border-b">
          <div className="text-2xl">{title}</div>
          <div onClick={closeFunc}>
            <GrClose size={25} />
          </div>
        </div>
        <div>{bodyElement}</div>
        <Button onSubmit={submitFunc} btnLabel={btnLabel} />
        <div>{footerElement}</div>
      </div>
    </div>
  );
};

export default Modal;

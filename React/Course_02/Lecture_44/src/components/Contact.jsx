import React, { useState } from "react";
import Modal from "./Modal";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="text-2xl caret-lime-50">This is contact Page</h1>
      <button onClick={() => setIsOpen(true)}>Open PopUp</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p>Hello I am header passed</p>}
        footer={<button onClick={() => setIsOpen(false)}>Ok</button>}
      >
        <p>
          hi i am contact page pop up hope you understand our note,click ok to
          close it.
        </p>
      </Modal>
    </>
  );
}

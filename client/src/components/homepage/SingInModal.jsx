import React from "react";
import { Modal } from "@mantine/core  ";

const SingInModal = (opened, setOpened) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Sign In"
      centered
    >
      {/* Modal content */}
    </Modal>
  );
};

export default SingInModal;

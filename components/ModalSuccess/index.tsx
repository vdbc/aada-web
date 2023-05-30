import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.scss";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,

  p: 4,
};

declare type Props = {
  isOpen: boolean;
  onSetIsOpen: any;
};
export default function ModalSuccess({ isOpen, onSetIsOpen }: Props) {
  const handleOpen = () => onSetIsOpen(true);
  const handleClose = () => onSetIsOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={isOpen}>
          <Box sx={style} className={styles.modal}>
            <img src="/modal.svg" className={styles.img}></img>
            <Typography
              className={styles.text}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Thank you for your dedication and commitment to evaluating the
              nominations for the Asia Architecture Design Awards. We are very
              appreciative that you took the time to be part of the judging
              process.
            </Typography>
            <Button className={styles.button} onClick={handleClose}>
              Back to Scoring Board
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface ConfirmDialogProps {
  buttonText: string;
  title: string;
  text: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  buttonText,
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
}) => {
  const showDialog = () => {
    MySwal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      reverseButtons: true,
      background: "black",
      color: "white",
      confirmButtonColor: "#262424",
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
        MySwal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
          background: "black",
          color: "white",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire({
          title: "Cancelled!",
          text: "Your wallet is safe.",
          icon: "error",
          showCancelButton: false,
          background: "black",
          color: "white",
        });
      }
    });
  };

  return <button onClick={showDialog}>{buttonText}</button>;
};

export default ConfirmDialog;

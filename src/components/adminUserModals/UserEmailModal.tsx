import * as React from "react";
import { TextField, DialogContent, DialogContentText } from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";
export default function UserEmailModal(props: any) {
  return (
    <div>
      <CustomModal name="User email" onClose={props.onClose}>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Match" defaultValue="usereds@gmail.com"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}

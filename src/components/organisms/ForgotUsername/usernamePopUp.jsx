import React, { useEffect } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Typography } from "@mui/material";
import styles from './styles'



export const ForgotUsernamePopup=({open,close})=>{
      return(
        <Dialog open={open} onClose={close}>
            <DialogContent sx={styles.dialogContent}>
            <ErrorOutlineIcon sx={styles.eoIcon} />
              <DialogContentText>
                  <label style={styles.textContent}>For External Provider - Your primary practice email is your username.</label>
              </DialogContentText>
              <CloseIcon sx={styles.closeIcon} onClick={close}/>
            </DialogContent>
        </Dialog>
      )
}

export default ForgotUsernamePopup;
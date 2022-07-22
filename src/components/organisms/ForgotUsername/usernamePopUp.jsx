import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Typography } from "@mui/material";
import { styles } from "./style";

export const st={
    dialogContent:{
        backgroundColor:"#7b92cbb0",
        color:"#182441b0",
        display:"flex"
    },

    textContent:{
      color:"#182441b0"
    },

    closeIcon:{
      margin:"2%",
      cursor:"pointer"
    },

    eoIcon:{
      margin:"2%"
    }
}

export const createUsernamePopup=()=>{
    const [open,setOpen]=React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    <Dialog open={open} onClose={handleClose}>
          <DialogContent sx={st.dialogContent}>
          <ErrorOutlineIcon sx={st.eoIcon} />
            <DialogContentText>
                <div sx={st.textContent}><label>For External Provider - Your primary practice email is your username.</label></div>
            </DialogContentText>
            <CloseIcon sx={st.closeIcon} onClick={handleClose}/>
          </DialogContent>
      </Dialog>
}

export default createUsernamePopup;
import React from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function ImageUpload(props) {
    const [file, setFile] = React.useState(null);

     const onFileChange = (event) => { 
     
        // Update the state 
        setFile(event.target.files[0]); 
       
      }; 
       
      // On file upload (click the upload button) 
     const onFileUpload = () => { 
       
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          file, 
        ); 
       
        // Details of the uploaded file 
        console.log(file); 
       
        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData); 
      }; 
       
      // File content to be displayed after 
      // file upload is complete 
    const fileData = () =>{
        return(
            <div>
                
            </div>
        );
    }
    return(
        <div>
              <input type="file" onChange={onFileChange} /> 
              { file!==null?
                <div> 
                <h2>File Details:</h2> 
                <p>File Name: {file.type}</p> 
                <p>File Name: {file.name}</p> 
                </div>
                :
                <div> 
                <br /> 
                <h4>Choose before Pressing the Upload button</h4> 
               </div> 
            } 
        
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>

        </div>
    );
}


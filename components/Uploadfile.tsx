{/*import React, {useState} from 'react';
import Dropzone from "react-dropzone";
import axios from "axios";
import styled from 'styled-components';

const Uploadfile = () => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles : any) => {
        setFiles(acceptedFiles);

        const formData = new FormData();
        for (const file of acceptedFiles) {
            formData.append("files", file);
        }
        axios.post("http://localhost:5000/upload", formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then(response =>{
            console.log("Files uploaded successfully");
        })
        .catch(error =>{
            console.error("error uploading files",error);
        });
    };
  return (
    <div>
        <Wrapper>
    <Dropzone onDrop={onDrop}>
        {({
            getRootProps, getInputProps }) =>(
                <div {...getRootProps()}>
              <input {...getInputProps()}/>
              <p >
                Drag or drop CV here, 
              </p>
                </div>
  )
        }
    </Dropzone>
    </Wrapper>
    {files.map(file =>(
        <div key={file.name}>
            <p>File name: {file.name}</p>
            <p>File size: {file.size}</p>
            </div>
    ))}
    </div>
  );
};

export default Uploadfile;

const Wrapper = styled.div`
background: #185651 ;
padding:30px;
color : #fff;
`





*/}
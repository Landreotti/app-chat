import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import Dropzone from 'react-dropzone';

function StandardMessageForm({props, activeChat}) {
  console.log("🚀 ~ file: StandardMessageForm.jsx:6 ~ StandardMessageForm ~ activeChat:", activeChat)
  console.log("🚀 ~ file: StandardMessageForm.jsx:6 ~ StandardMessageForm ~ props:", props)
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    
  }
  
  return (
    <div className='message-form-container'>
      {preview && (
        <div className='message-form-preview'>
            <img 
              alt="" 
              className='message-form-preview' 
              src={preview} 
              onLoad={() => URL.revokeObjectURL(preview)} 
              width="70px"
            />
            <XMarkIcon
              className='message-form-icon-x'
              onClick={() => {
                setPreview("");
                setAttachment("");
              }}
             /> 
        </div>
      )}
      <div className='message-form'>
        <div className='message-form-input-container'>
          <input 
            className='message-form-input' 
            type="text" 
            value={message} 
            onChange={handleChange}
            placeholder="Send a Message..."
          />
        </div>
        <div className='message-form-icons'>
            <Dropzone 
              acceptedFiles=".jpg,.jpeg,.png,.jiff" 
              multiple={false}
              noClick={true}
              onDrop={(acceptedFiles) => {
                setAttachment(acceptedFiles[0]);
                setPreview(URL.createObjectURL(acceptedFiles[0]))
              }}
            >
            {
              ({getRootProps, getInputProps, open}) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <PaperClipIcon
                    className='message-form-icon-clip'
                    onClick={open}
                    />
                </div>
              )
            }
            </Dropzone>

            <hr className='vertical-line' />
            <PaperAirplaneIcon
              className='message-form-icon-airplane'
              onClick={() => {
                setPreview("");
                handleSubmit();
              }}
              />
        </div>
      </div>
    </div>
  )
}

export default StandardMessageForm
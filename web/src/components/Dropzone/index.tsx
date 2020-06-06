import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

import {FiUpload} from 'react-icons/fi'

import './styles.css'

interface Props{
    onFile: (file: File) => void
}

const Dropzone: React.FC<Props> = ({onFile}) =>  {
    const [selectFile, setSelectFile] = useState('')
  const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0]

      const fileUrl = URL.createObjectURL(file)

      setSelectFile(fileUrl)
      onFile(file)
  }, [onFile])
  const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      accept: 'image/*'
    })

  return (
    <div  className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

          {
              selectFile ? <img src={selectFile} alt="Point" /> : (<p>
                  <FiUpload />
            Imagem do estabelecimento
              </p>)
          }
      
      
      
    </div>
  )
}

export default Dropzone
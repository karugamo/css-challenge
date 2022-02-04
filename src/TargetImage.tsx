import {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'

export default function TargetImage() {
  const {getInputProps, getRootProps} = useDropzone({onDrop})
  const [image, setImage] = useState<string | undefined>()

  useRevokeObjectURLS()

  return (
    <Root {...getRootProps()}>
      <input {...getInputProps()} />
      {image && <Image src={image} />}
    </Root>
  )

  function useRevokeObjectURLS() {
    useEffect(() => {
      if (image) URL.revokeObjectURL(image)
    }, [image])
  }

  function onDrop(acceptedFiles: File[]) {
    setImage(URL.createObjectURL(acceptedFiles[0]))
  }
}

const Image = styled.img`
  height: 40vh;
  width: 100%;
  object-fit: contain;
`

const Root = styled.div`
  height: 40vh;
  background-color: white;
  padding: 16px;
  margin: 20px;
  border-radius: 6px;
`

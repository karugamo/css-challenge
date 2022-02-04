import {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'

export default function TargetImage() {
  const {getInputProps, getRootProps} = useDropzone({onDrop})
  const [image, setImage] = useState<string | undefined>()

  useKeyboardPaste()
  useRevokeObjectURLS()

  return (
    <Root {...getRootProps()}>
      <input {...getInputProps()} />
      {image ? (
        <Image src={image} />
      ) : (
        <div>Drop an image here, or click to select a file to upload.</div>
      )}
    </Root>
  )

  function useKeyboardPaste() {
    useEffect(() => {
      document.onpaste = event => {
        const item = event.clipboardData?.items[0]

        if (item?.kind !== 'file') return

        const file = item.getAsFile()
        if (file) setImage(URL.createObjectURL(file))
      }
    }, [])
  }

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
  display: flex;
  justify-content: center;
  align-items: center;
`

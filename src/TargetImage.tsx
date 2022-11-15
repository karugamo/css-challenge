import styled from 'styled-components'

export default function TargetImage({image}: {image: string}) {
  return (
    <Root>
      <Image src={image} />
    </Root>
  )
}

const Image = styled.img`
  height: 37vh;
  width: 50%;
  object-fit: contain;
`

const Root = styled.div`
  height: 37vh;
  background-color: white;
  padding: 16px;
  margin: 20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

import {useState} from 'react'
import styled from 'styled-components'
import Editor from './Editor'
import TargetImage from './TargetImage'
import _challenge from '../challenges/twitter.json'

const challenge = _challenge as Challenge

function App() {
  const [htmlCode, setHtmlCode] = useState<string>(challenge.html)
  const [cssCode, setCssCode] = useState<string>(challenge.css)

  const iFrameContent = `    
    <html style="height: 100%;">
      <head>
        <style>${cssCode}</style>
      </head>
      <body style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
        ${htmlCode}
      </body>
    </html>
`

  return (
    <Container>
      <LeftPane>
        <Editor
          onChange={value => setHtmlCode(value)}
          language="html"
          levelId={challenge.id}
          defaultValue={htmlCode}
        />
        <Editor
          onChange={value => setCssCode(value)}
          language="css"
          levelId={challenge.id}
          defaultValue={cssCode}
        />
      </LeftPane>
      <RightPane>
        <ResultIFrame sandbox="" srcDoc={iFrameContent} />
        <TargetImage image={challenge.image} />
      </RightPane>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: lightsteelblue;
  height: 100vh;
`

const ResultIFrame = styled.iframe`
  background-color: white;
  border: none;
  height: 40vh;
  margin: 20px;
  padding: 16px;
  border-radius: 6px;
`

const LeftPane = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`

const RightPane = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`

export default App

interface Challenge {
  id: string
  html: string
  css: string
  image: string
}

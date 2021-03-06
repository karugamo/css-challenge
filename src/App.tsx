import {useState} from 'react'
import styled from 'styled-components'
import Editor from './Editor'
import TargetImage from './TargetImage'

const htmlExample = `<button class="button">Click me</button>`
const cssExample = `.button {
  border-radius: 8px;
}`

function App() {
  const [htmlCode, setHtmlCode] = useState<string>(htmlExample)
  const [cssCode, setCssCode] = useState<string>(cssExample)

  const iFrameContent = `    
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
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
          defaultValue={htmlExample}
        />
        <Editor
          onChange={value => setCssCode(value)}
          language="css"
          defaultValue={cssExample}
        />
      </LeftPane>
      <RightPane>
        <ResultIFrame sandbox="" srcDoc={iFrameContent} />
        <TargetImage />
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

import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Editor from './Editor'

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
          onChange={value => {
            if (value) setHtmlCode(value)
          }}
          defaultLanguage="html"
          defaultValue={htmlExample}
        />
        <Editor
          onChange={value => {
            if (value) setCssCode(value)
          }}
          defaultLanguage="css"
          defaultValue={cssExample}
        />
      </LeftPane>
      <RightPane>
        <ResultIFrame sandbox="" srcDoc={iFrameContent} />
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
  height: 100vh;
  width: 40%;
  margin: 20px;
  padding: 20px;
`

export default App

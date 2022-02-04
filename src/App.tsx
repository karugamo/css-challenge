import Editor from '@monaco-editor/react'
import {useState} from 'react'
import styled from 'styled-components'

function App() {
  const [cssCode, setCssCode] = useState<string | undefined>('')

  return (
    <Container>
      <EditorContainer>
        <Editor
          onChange={value => setCssCode(value)}
          height="90vh"
          defaultLanguage="css"
          defaultValue=""
        />
      </EditorContainer>
      <ResultContainer>
        <button className="button">Test</button>
        <style>{cssCode}</style>
      </ResultContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  color: #f5f5f5;
  flex-direction: row;
`

const EditorContainer = styled.div`
  flex: 1;
`

const ResultContainer = styled.div`
  flex: 1;
`

export default App

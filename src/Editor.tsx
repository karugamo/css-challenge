import MonarchEditor, {EditorProps} from '@monaco-editor/react'
import styled from 'styled-components'

export default function Editor(props: EditorProps) {
  return (
    <Container>
      <MonarchEditor
        height="40vh"
        theme="vs-dark"
        options={{
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          overviewRulerBorder: false,
          minimap: {
            enabled: false,
          },
        }}
        {...props}
      />
    </Container>
  )
}

const Container = styled.div`
  border-radius: 6px;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 20px;
`

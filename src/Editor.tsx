import MonacoEditor from '@monaco-editor/react'
import styled from 'styled-components'

interface EditorProps {
  language: string
  onChange(value: string): void
  defaultValue: string
}

export default function Editor({language, onChange, defaultValue}: EditorProps) {
  return (
    <Container>
      <MonacoEditor
        height="40vh"
        theme="vs-dark"
        loading=""
        options={{
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          overviewRulerBorder: false,
          minimap: {
            enabled: false,
          },
        }}
        onMount={handleEditorDidMount}
        defaultLanguage={language}
        onChange={onEditorChange}
        defaultValue={defaultValue}
      />
    </Container>
  )

  function handleEditorDidMount(editor: any) {
    const storedValue = localStorage.getItem(language)
    editor.setValue(storedValue || '')
    onChange(storedValue || '')
  }

  function onEditorChange(value: string | undefined, event: any) {
    if (value) onChange(value)
    if (language && value) localStorage.setItem(language, value)
  }
}

const Container = styled.div`
  border-radius: 6px;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 20px;
`

import MonacoEditor, {Monaco} from '@monaco-editor/react'
import styled from 'styled-components'

interface EditorProps {
  language: string
  onChange(value: string): void
  defaultValue: string
  levelId: string
}

export default function Editor({
  language,
  onChange,
  defaultValue,
  levelId,
}: EditorProps) {
  const storageKey = `editor-${levelId}-${language}`

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
    const storedValue = localStorage.getItem(storageKey)
    if (storedValue === null) return
    editor.setValue(storedValue || '')
    onChange(storedValue || '')
  }

  function onEditorChange(value: string | undefined) {
    if (value) {
      onChange(value)
      localStorage.setItem(storageKey, value)
    }
  }
}

const Container = styled.div`
  border-radius: 6px;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 20px;
`

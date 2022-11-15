import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Editor from './Editor'
import TargetImage from './TargetImage'
import _challenges from '../challenges.json'

const challenges: Challenge[] = _challenges

function App() {
  const [challengeIndex, setChallengeIndex] = useState<number>(0)
  const challenge = challenges[challengeIndex]
  const [htmlCode, setHtmlCode] = useState<string>(challenge.html)
  const [cssCode, setCssCode] = useState<string>(challenge.css)

  useRouter()

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
      <Grid>
        <LeftPane>
          <Editor
            onChange={value => setHtmlCode(value)}
            language="html"
            levelId={challenge.id}
            defaultValue={challenge.html}
          />
          <Editor
            onChange={value => setCssCode(value)}
            language="css"
            levelId={challenge.id}
            defaultValue={challenge.css}
          />
        </LeftPane>
        <RightPane>
          <ResultIFrame sandbox="" srcDoc={iFrameContent} />
          <TargetImage image={challenge.image} />
        </RightPane>
      </Grid>
      <Bottom>
        <Title>
          Challenge {challengeIndex + 1} of {challenges.length}:{' '}
          {challenge.title}
        </Title>
        <ButtonGroup>
          {challengeIndex > 0 && (
            <Button onClick={goToPreviousChallenge}>Previous</Button>
          )}
          {challengeIndex < challenges.length - 1 && (
            <Button onClick={goToNextChallenge}>Next</Button>
          )}
        </ButtonGroup>
      </Bottom>
    </Container>
  )

  function useRouter() {
    useEffect(() => {
      const hash = window.location.hash.slice(1)
      if (challenges.find(c => c.id === hash)) {
        setChallengeIndex(challenges.findIndex(c => c.id === hash))
      }
    }, [])

    useEffect(() => {
      window.location.hash = challenge.id
    }, [challengeIndex])
  }

  function goToNextChallenge() {
    setChallengeIndex(challengeIndex + 1)
  }

  function goToPreviousChallenge() {
    setChallengeIndex(challengeIndex - 1)
  }
}

const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`

const Button = styled.button`
  border: none;
  background-color: #f7c4de;
  padding: 8px 16px;
  border-radius: 6px;
  color: #4c3c44;
  font-weight: bold;
  cursor: pointer;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const Container = styled.div`
  background-color: lightsteelblue;
  height: 100vh;
`

const Grid = styled.div`
  display: flex;
  flex-direction: row;
`

const ResultIFrame = styled.iframe`
  background-color: white;
  border: none;
  height: 37vh;
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
  title: string
  html: string
  css: string
  image: string
}

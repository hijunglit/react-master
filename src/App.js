import styled, { keyframes } from 'styled-components';

const Emoji = styled.span``
const animation = keyframes`
  from {
    transform:rotate(0deg)
  } to {
    transform: rotate(360deg)
  }
`
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  background: tomato;
  width: 100px;
  height: 100px;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    transition-duration: 500ms;
    &:hover {
      font-size: 2.5em;
    }
    &:active {
      opacity: 0;
    }
  }
`

function App() {
  return (
    <div>
      <Box>
        <Emoji>🤪</Emoji>
      </Box>
      <Emoji>🌈</Emoji>
    </div>
  )
}

export default App;

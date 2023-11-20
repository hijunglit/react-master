import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`
const Box1 = styled.div`
  background: tomato;
  width: 100px;
  height: 100px;
`
const Box2 = styled.div`
  background: orange;
  width: 100px;
  height: 100px;
`
const Span = styled.span`
  color: #fff;
`

function App() {
  return (
    <Father>
      <Box1><Span>Hi!</Span></Box1>
      <Box2></Box2>
    </Father>
  )
}

export default App;

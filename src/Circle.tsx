import styled from 'styled-components';

// check props, describe object shape to tsx
interface CircleProps {
    bgColor: string;
}

const Container = styled.div<CircleProps>`
    width:200px;
    height:200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor}/>
}

export default Circle;
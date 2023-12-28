import Input from "./Input";
import styled from "styled-components";

const Container = styled.div`
  ${Input} {
    margin: 10px;
  }
`;

function Practice3() {
  return (
    <Container>
      <h2>Size</h2>
      <Input size='small'/>
      <Input size='medium'/>
      <Input size='large'/>
      <h2>Round</h2>
      <Input $round/>
      <h2>Error</h2>
      <Input $error/>
    </Container>
  );
}


export default Practice3;
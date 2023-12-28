import styled, { css } from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const fontSize = css`
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
`;

const Button = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  ${fontSize};
  /* font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px; */
`;

const Input = styled.input`
  border: 2px solid #eee;
  border-radius: 4px;
  outline: none;
  padding: 16px;
  ${fontSize};
  /* font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px; */
`;

const Container = styled.div`
  ${Button}, ${Input} {
    margin: 10px;
  }
`;

function Reuse() {
  return (
    <Container>
      <h2>Button</h2>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <Input size="small" />
      <Input size="medium" />
      <Input size="large" />
      <h2>Round</h2>
      <Input $round />
      <h2>Error</h2>
      <Input $error />
    </Container>
  );
}

export default Reuse;

import styled from "styled-components";
import Input from "./Input";
import SearchInput from "./SearchInput";

const Container=styled.div`
${Input}{
    margin: 10px;
}
`;

function Practice4(){
    return(
        <Container>
            <h2>Input</h2>
            <Input />
            <h2>Search Input</h2>
            <SearchInput />
        </Container>
    )
}

export default Practice4;
import styled from "styled-components";
import Button from "./Button";
import kakaoImg from "./kakao.svg";

const Icon = styled.img`
  width: 24px;
  heigh: 24px;
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  ${Icon} {
    margin-right: 8px;
  }
`;

function KakaoButton() {
  return (
    <StyledButton>
      <Icon src={kakaoImg} alt="kakao icon" />
      카카오 로그인
    </StyledButton>
  );
}

export default KakaoButton;

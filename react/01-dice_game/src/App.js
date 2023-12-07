import logo from "./assets/logo.png";
import Board from "./Board";

//함수형 컴포넌트:컴포넌트를 함수형으로 만든것(변수형으로도 만들수 있음)
//      함수형 컴포넌트를 만들 때에는 함수명의 첫 글자는 반드시 대문자
//      함수형 컴포넌트 안에서는 JSX문법으로 만든 리엔트 엘리먼트를 리턴해줘야 한다.
function App() {
  return (
    <div>
      <div>
        <img src={logo} alt="주사위게임 로고" />
        <h1>주사위게임</h1>
        <div>
          <button>던지기</button>
          <button>처음부터</button>
        </div>
      </div>
      <div>
        <Board name="나" color="blue"/>
        <Board name="상대" color="red" />  
      </div>
    </div>
  );
}

export default App;

import logo from "./assets/logo.png";
import Board from "./Board";
import "./App.css";
import Button from "./Button";
import { useState } from "react";

// 함수형 컴포넌트:컴포넌트를 함수형으로 만든것(변수형으로도 만들수 있음)
//      함수형 컴포넌트를 만들 때에는 함수명의 첫 글자는 반드시 대문자
//      함수형 컴포넌트 안에서는 JSX문법으로 만든 리엔트 엘리먼트를 리턴해줘야 한다.

const style = {
  backgroundColor: "#000",
  color: "#fff",
};

// JSX에서는 객체지형 개념이 적용되기 때문에 class가 아니라 className으로 작성
// for ==>htmlFor, onclick/onblur ==>onClick/onBlur

//주사위 랜덤 숫자
function random(n) {
  return Math.ceil(Math.random() * n); //ceil-소수점 올림
}


// let value;

// function useState(initialValue) {
//   if (value === undefined) {
//     value = initialValue;
//   }

//   const setState = (newValue) => {
//     value = newValue;
//   };

//   return [value, setState];
// }


function App() {
  //State
  //던지기 버튼을 누르면 화면에서 주사위 이미지가 바뀌어야 한다.
  //HTML로 작성한다면 주사위 이미지마다 화면을 만들거나
  //비동기 요소를 추가, 삭제하는 코드를 작성해야한다.
  //리엑트에서는 State 라는 것을 사용한다. State는 리엑트에서 변수 같은 것인데 이 State가 바귈 때마다 리액트가 알아서 화면을 새로 렌더링 해준다.
  const [myNum, setMyNum] = useState(1);
  const [otherNum, setOtherNum] = useState(1);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory, ...temp] =useState([]);

  const handleRollClick = () => {
    //주사위 숫자 뽑기 /기록
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyNum(nextMyNum);
    setGameHistory([...gameHistory, myNum]);  //gameHistory=[myNum];

    setOtherNum(nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    alert("처음으로 함수");
  };

  return (
    // <div style={ style }> //위의 const style 적용
    <div className="App">
      <div>
        <img src={logo} alt="주사위게임 로고" className="App-logo" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button onClick={handleRollClick}>던지기 </Button>
          {/* () 넣으면 바로 실행 */}
          <Button onClick={handleClearClick}>처음으로</Button>
        </div>
      </div>

      <div className="App-boards">
        <Board name="나" color="blue" num={myNum} gameHistory={gameHistory} />
        <Board
          name="상대"
          color="red"
          num={otherNum}
          gameHistory={otherGameHistory}
        />
      </div>
    </div>
  );
}

export default App;

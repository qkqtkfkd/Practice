const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

//로딩시점에 첫번째 input 요소 focus(포커스)
window.addEventListener("load", () => inputs[0].focus());
// //윈도우가 로드가 되면 읽어서 inputs의 첫번째에 focus

//칸에 글자쓰기(익명함수)
//---//index1=input의 순서
//---//const currentInput=input; -> 현제 입력하는 것=input
//---//previous=이전, next=다음, ElementSibling=형제요소
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", () => {
    const currentInput = input;
    const preInput = input.previousElementSibling;
    const nextInput = input.nextElementSibling;

    //---//hasAttribute = 속성확인, disabled =input 기본속성(비활성)
    //--//다음칸에 && 비활성이 확인된 && 현재입력하는 칸의 값(value)이 "공백"이 아닐 경우
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      //--//다음칸에 비활성 속성을 지우고 포커스.
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    //---//현재 입력한 칸의 값이 1자리 숫자보다 크면 방금 적은거 지우고;
    //---//return;= 종료
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    //백스페이스로 지우는 로직 구현
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        //---//index1 (현제 값을 지운 이벤트-고정값) index2(forEach에 있는 값)
        //---//백스페이스 키가 입력된 input 값과 같거나 오른쪽에 있으면
        //---//값(value)을 지우고 +disabled 상태로 전환 + 왼쪽으로 이동(prev[이전])Input 포커스)->중간에 지우면 오른쪽 부분 모두 지워짐
        if (index1 <= index2) {
          input.setAttribute("disabled", true); //disabled 속성 추가
          input.value = "";
          if (prevInput) {
            prevInput.focus();
          }
        }
        //---//제일 왼쪽([0])에 있는 input은 disabled 되면 안됨.
        if (index1 === 0) {
          inputs[0].removeAttribute("disabled");
          inputs[0].focus();
        }
      });
    }

    if (
      !inputs[inputs.length - 1].hasAttribute("disabled") &&
      inputs[input.length - 1].value !== ""
    ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});


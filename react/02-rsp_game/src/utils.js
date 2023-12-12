const WINS={ //이기는 경우
    rock:"scissor", 
    scissor:"paper",
    paper:"rock"
};

function random(n) {
  return Math.ceil(Math.random() * n);
}

export function compareHand(a, b) {
  //승리 --> 1, 패배--> -1, 무승부--> 0
  if(WINS[a]===b) return 1; //내[a]가 이길 때
  if(WINS[b]===a) return -1; //상대[b]가 이길 때
  return 0; //무승부
}

export function generateRandomHand() {
  const num = random(3);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "scissor";
  } else {
    return "paper";
  }
}

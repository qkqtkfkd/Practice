import "./AnimationControl.css";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const hoverVariants = {
  initial: { width: "20%", opacity:0.5 },
  hover: { width: "28%",opacity:1 },
};

export function AnimationControl() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  const control = useAnimationControls();
  //초기화 코드
  //useEffect 후크의 두번째 파라미터(배열)이 빈 배열이면 해당 컴포넌트의 첫번째 렌더링 시점에만 한번 실행됨!
  //useEffect 렌더링이 끝나면 실행
  useEffect(() => {
    control.start("hover"); //첫번째 박스 호버 상태
  }, [state1]);

  return (
    <>
      <div className="container" onMouseLeave={() => control.start("hover")}>
        {/* 마우스가 컨테이너에서 떠나면 호버 */}

        <motion.div
          className="box box1"
          variants={hoverVariants}
          initial="initial"
          //   whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
          animate={control}
        />
        <motion.div
          className="box box2"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
          onMouseEnter={() => control.start("initial")}
        />
        <motion.div
          className="box box3"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
        />
        <motion.div
          className="box box4"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
        />
        <motion.div
          className="box box5"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
        />
      </div>
    </>
  );
}

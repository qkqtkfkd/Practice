import "./MyMotion1.css";
import { motion } from "framer-motion";

const boxVariants = {
  phase1: { scale: 0, transition: { type: "linear", delay: 1 } },
  phase2: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1 } },
};

export function MyMotion1() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={boxVariants}
          initial="phase1"
          animate="phase2"
          //   initial={{ scale: 0 }} //초기값, css  //{-객체X {-객체}}
          //   animate={{ scale: 1, rotateZ: 360 }} //변화된 상태의 css
          //   transition={{ type: "spring", delay: 1 }} //관련값. 딜레이 시간 등

          //   animate={{ borderRadius: "50%" }}

          //   initial={{ scaleX: 0 }}
          //   animate={{ scaleX: 1 }}
        ></motion.div>
      </div>
    </>
  );
}

import styles from "./ColorSurvey.module.css";
// 구조분해 할당
function ColorSurvey({ value, onClick }) {
  return (
    <div className={styles.colorSurvey} onClick={onClick}>
      <div className={styles.id}>{value.id}</div>
      <div className={styles.mbti}>{value.mbti}</div>
      <div className={styles.arrow}>
        <img
          className={styles.arrowIcon}
          src="/images/arrow.svg"
          // public(공공의-외부용) 폴더여서 가능. 외부에서 접근하는 경로로 가능.
          // src 폴더는 외부에서 접근 불가. import 작성. src 이상은 못감.
          alt="arrow icon"
        />
      </div>
      <div className={styles.colorChip} style={{backgroundColor:value.colorCode}}></div>
      <div className={styles.colorCode}>{value.colorCode}</div>
    </div>
  );
}

export default ColorSurvey;

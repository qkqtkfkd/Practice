import Card from "./../component/Card";
import Container from "./../component/Container";
import CourseIcon from "./../component/CourseIcon";
import Button from "./../component/Button";
import { useLocation, useParams } from "react-router-dom";
import styles from "./CoursePage.module.css";
import getCourseColor from "../utils/getCourseColor";

function CoursePage() {
  const { course } = useLocation().state;
  // const props=useParams();

  const courseColor = getCourseColor(course?.code);

  const headerStyle = {
    borderTopColor: courseColor,
  };

  return (
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1 className={styles.title}>{course.title}</h1>
          <Button variant="round">+코스 담기</Button>
          <p className={styles.summary}>{course.summary}</p>
        </Container>
      </div>
      <Container className={styles.content}>
        {course.topics.map(({ topic }) => (
          <Card key={topic.slug} className={styles.topic}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;

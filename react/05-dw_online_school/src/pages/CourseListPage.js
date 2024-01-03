import ListPage from "../component/ListPage";
import styles from "./CourseListPage.module.css";
import searchBarStyles from "../component/SearchBar.module.css";
import searchIcon from "../assets/search.svg";
import { getDatas } from "../api/Firebase";
import { useEffect, useState } from "react";
import Warn from "../component/Warn";
import CourseItem from "../component/CourseItem";

let listItems;

function CourseListPage() {
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isInit, setIsInit]=useState(true);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchItems = listItems.filter(({ title }) =>
      title.includes(keyword)
    );
    setItems(searchItems);
  };

  const handleLoad = async () => {
    const items = await getDatas("courses");
    listItems = items;
    setItems(items);
    setIsInit(false);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <ListPage
      variant="catalog"
      title="모든 코스"
      description="자체 제작된 코스들로 기초를 쌓으세요."
    >
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholdr="검색으로 코스 찾기"
        />
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {items.length}개 코스</p>

      {items.length === 0 && !isInit ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 코스가 없어요."
          description="올바른 검색어가 맞는지 다시 한번 확인해 보세요."
        />
      ) : (
        <div className={styles.courseList}>
          {items.map((course) => (
            <CourseItem key={course.docId} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;

import { useState } from "react";

function ReviewForm() {
  //   const [title, setTitle] = useState("");
  //   const [rating, setRating] = useState(0);
  //   const [content, setContent] = useState("");
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  //   const handleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };
  //   const handleRatingChange = (e) => {
  //     setRating(Number(e.target.value));
  //   };
  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };
  const handleChange = (e) => {
    const{name, vallue}=e.target;
    //setValues()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input type="file" accept="image/png, imame/jpeg" />
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;

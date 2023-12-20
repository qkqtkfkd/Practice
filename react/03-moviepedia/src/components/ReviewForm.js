import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgUrl: null,
};

function ReviewForm({ onSubmit, onSubmitSuccess }) {
  const [values, setValues] = useState(INITIAL_VALUES);

  //   const [title, setTitle] = useState("");
  //   const [rating, setRating] = useState(0);
  //   const [content, setContent] = useState("");
  // const [values, setValues] = useState({
  //   title: "",
  //   rating: 0,
  //   content: "",
  //   imgUrl: null,
  // });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // const handleChange = (e) => {
  //   let name, value;
  //   if (e.files !== null) {
  //     name=e.targe.name;
  //     value=e.target.files[0];
  //   }else if(){
  //     value=e.target.text;
  //   } else {
  //     value=e.targe.value;
  //   }
  //   name = e.target;
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };

  //   const handleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };
  //   const handleRatingChange = (e) => {
  //     setRating(Number(e.target.value));
  //   };
  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { review } = await onSubmit("movie", values);
      onSubmitSuccess(review);
    } catch (error) {
      return;
    } finally {
    }
    setValues(INITIAL_VALUES);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgUrl" value={values.imgUrl} onChange={handleChange} />
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;

import { useRef } from 'react';
import classes from './AddMovieForm.module.css'

const AddMovieForm = (props) => {
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();

        const movieData = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value
        }
        props.onAddMovie(movieData)
        console.log(movieData);
    }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef}/>
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
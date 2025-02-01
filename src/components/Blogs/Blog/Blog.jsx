import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  // console.log(blog)
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mt-8 mb-10">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-6 items-center">
          <img className="rounded-full w-14" src={author_img} alt="" />
          <div>
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookmarks(blog)} className="text-xl">
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-[#6047EC] underline mt-4"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func
};

export default Blog;

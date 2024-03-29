

import * as Styles from "./PostDetail.style"


import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <Styles.PostDetail>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className="createdBy">{post.createdBy}</p>
      <div className="tags">
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </Styles.PostDetail>
  );
};

export default PostDetail;

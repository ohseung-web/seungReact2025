export default function PostList(props) {
  return (
    <>
      <div className="post-list">
        {props.post.map((post, index) => (
          <div className="post-card" key={index}>
            <h4
              onClick={() => {
                props.setModalOpen(true);
                props.setSelectedIndex(index);
              }}
              style={{ cursor: 'pointer' }}
            >
              {post}
              <span
                className="like"
                onClick={(e) => {
                  e.stopPropagation();
                  props.addLikes(index);
                }}
              >
                👍
              </span>{props.likes[index]}
            </h4>
            <p className="post-date">📅11월 1일 발생</p>
            <button className="delete-btn"
              onClick={() => {
                props.delPost(index);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

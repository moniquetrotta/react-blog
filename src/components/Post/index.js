const Post = (props) => {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>{props.subtitle}</h5>
      <h4>{props.title}</h4>
      <p className="mt-1">
        {props.children}
      </p>
        <div className="flex pt-2">
          <div className="img-profile"></div>
          <div className="description-profile ml-2">
            <h6 className="color-blue">Lucas Ossola</h6>
            <p>Aug 2, 2022 - 8 min read</p>
          </div>
        </div>
    </div>
  );
}

export default Post;
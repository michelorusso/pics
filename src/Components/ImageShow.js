import "../style/ImageList.css";

function ImageShow({ url }) {
  return (
    <div>
      <img
        className="img"
        alt={url.alt_description}
        src={url.urls.regular}
      ></img>
    </div>
  );
}

export default ImageShow;

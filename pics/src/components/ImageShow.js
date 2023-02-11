
function ImageShow( {image}) {
  return <div>
    <img src = {image.urls.raw} alt = {image.alt_description} />
  </div>;
}

export default ImageShow;

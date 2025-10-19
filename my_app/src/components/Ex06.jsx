function ImgCard() {
  return (
    <div className="gallery">
      <div className="image-card">
        <img src="/images/image02.png" alt="풍경1" />
        <p>아름다운 산</p>
      </div>
      <div className="image-card">
        <img src="/images/image01.png" alt="풍경2" />
        <p>푸른 바다</p>
      </div>
      <div className="image-card">
        <img src="/images/image03.png" alt="풍경3" />
        <p>도시 야경</p>
      </div>
    </div>
  );
}
export default ImgCard;

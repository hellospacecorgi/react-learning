function ProfileCard({ title, handle, imageSrc, description }) {
  return (
    <div className="card text-center">
      <div className="card-header">{title}</div>
      <div className="embed-responsive embed-responsive-1by1">
        <img
          className="card-img-top py-3 px-3 embed-responsive-item"
          src={imageSrc}
          alt="pda logo"
        />
      </div>
      <div className="card-content">
        <div className="card-title">{handle}</div>
        <div className="card-footer text-body-secondary">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;

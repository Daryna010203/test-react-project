import profile from'./Profile.module.css'


const Profile = (props) => {
  const {name, tag, location, image, stats} = props;

  return (
    <section className={profile.section}>
  <div>
    <img className={profile.account}
      src={image}
      alt={name}
    />
    <h2 className={profile.title}>{name}</h2>
    <p className={profile.text}>@{tag}</p>
    <p className={profile.text}>{location}</p>
  </div>

  <ul className={profile.inform}>
    <li className={profile.informbox}>
      <span>Followers</span>
          <span>{stats.followers}</span>
    </li>
    <li className={profile.informbox}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={profile.informbox}>
      <span >Likes</span>
      <span>{stats.likes}</span>
    </li>
        </ul>
        
</section>    
  );
};

export default Profile;




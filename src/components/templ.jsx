import css from '../components/tmpl.module.css';
export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
   <div className={css.tmpl}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.qantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.qantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.qantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
};
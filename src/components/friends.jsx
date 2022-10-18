import css from '../components/frnds.module.css';
export const FriendList = ({ friends }) => {
    return ( 
<section className={css.statistics}>
        <ul>
     {friends.map(i => (
        <FriendListItem  key={i.id} friend={i} />
      ))}
  
   </ul>
</section>
    )
};
const FriendListItem = ({ friend }) => {
    return (
        <li className={css.item} key={friend.id}>
             <span className={friend.isOnline ? [css.online] : [css.notonline]}>{friend.isOnline}</span>
             <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" heigth="48"/>
             <p className={css.name}>{friend.name}</p>
        </li>
    )
}
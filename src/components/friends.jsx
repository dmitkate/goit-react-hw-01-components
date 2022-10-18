
import css from '../components/frnds.module.css';
export const FriendList = ({ friends }) => {
    return ( 
<section className={css.statistics}>
        <ul>
     {friends.map(i => (
        <li className={css.item} key={i.id}>
             <span className={i.isOnline ? [css.online] : [css.notonline]}>{i.isOnline}</span>
             <img class="avatar" src={i.avatar} alt="User avatar" width="48" heigth="48"/>
             <p className={css.name}>{i.name}</p>
        </li>
      ))}
  
   </ul>
</section>
    )
};
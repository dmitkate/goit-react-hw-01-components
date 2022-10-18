import css from '../components/stt.module.css';
export const Statistics = ({ stats }) => {
    return (
<section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>
  <ul className={css.statlist}>
     {stats.map(i => (
         <li key={i.id}>
             <span className={css.label}>{i.label}</span>
            <span className={css.percentage}>{i.percentage}%</span>
         </li>
      ))}
  
    </ul>
</section>
    );
};
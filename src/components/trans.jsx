import css from '../components/trnctn.module.css';
export const TransactionHistory = ({ items }) => {
    return (
<section className={css.statistics}>
  <h2 className={css.title}>TransactionHistory</h2>
   <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody>
{items.map(i => (
 
    <tr className={css.statisticsTr} key={i.id.toString()}>
      <td>{i.type}</td>
      <td>{i.amount}</td>
      <td>{i.currency}</td>
    </tr>
 
))}
    </tbody>
    </table>
   </section>
    );
};
import { Profile } from './templ';
import { Statistics } from './statistics';
import {FriendList} from './friends';
import { TransactionHistory } from './trans';

import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';


export const App = () => {
  return <div>
    <Profile  username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}  />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />
  </div>
};
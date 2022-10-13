import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from 'components/App';

import './index.css';

const user = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};
const ytt = (<div class="profile">
  <div class="description">
    <img
      src={user.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{user.username}</p>
    <p class="tag">@{user.tag}</p>
    <p class="location">{user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity"></span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
</div>);
ReactDOM.render(ytt, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

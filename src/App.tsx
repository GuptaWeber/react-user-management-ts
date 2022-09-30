import {FC} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import UserCard from './components/UserCard/UserCard';
import db from './db.json';

const App: FC = () => {
  return (
    <>
      <Header title="Users" />
      <div className="container">
        {db.users.map((user, i) => (
          <UserCard
            name={user.name}
            avatar_url={`https://avatars.githubusercontent.com/u/${i}`}
            key={user.name}
            github_url={user.social.github_url}
          />
        ))}
      </div>
      <Footer company="Techigai" />
    </>
  );
};

export default App;

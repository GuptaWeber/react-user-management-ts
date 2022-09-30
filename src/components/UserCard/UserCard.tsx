import StyledUserCard from './styled';
import './UserCard.css';

const UserCard = ({name, avatar_url, github_url}) => (
  <StyledUserCard>
    <img className="user_img" src={avatar_url} alt={name} />
    <p className="user_name">{name}</p>
    <p className="user_github_url">
      <a href={github_url}>View Github</a>
    </p>
  </StyledUserCard>
);

export default UserCard;

import './UserCard.css';

function UserCard({ user }) {
  if (!user.active) return null;

  return (
    <div className="user-card">
        <img src={user.avatar} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p>Возраст: {user.age}</p>
      <p>Город: {user.city}</p>
      <span className="status">Активен</span>
    </div>
  );
}

export default UserCard;

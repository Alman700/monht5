import UserCard from './UserCard';

function UserList() {
 const users = [
  {
    name: 'Анар',
    age: 25,
    city: 'Бишкек',
    active: true,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFX76_7baizLKppGFVtwjTC_xGExVNj0NBA&s',
  },
  {
    name: 'Балтабай',
    age: 30,
    city: 'Ош',
    active: true,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigcDAMXPn6qjpTFDOzl2OyEOyUGN-YsxaXw&s',
  },
  {
    name: 'Каныкей',
    age: 22,
    city: 'Талас',
    active: true,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcTEXRic41QzPZ_M4OA3EeDWeKA8EW_3PnA&s',
  },
  {
    name: 'Дыйканбай',
    age: 28,
    city: 'Нарын',
    active: true,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiGz10gCo_izr58sSXPcfUySd_dUQzTmGxA&s',
  },
];

  return (
    <div>
      <h1>Список пользователей</h1>
      <div className="user-list">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;

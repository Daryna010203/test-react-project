import friendList from './FriendList.module.css';
import FriendlistItem from '../FriendListItem/FriendListItem.jsx'


const FriendList = ({friends}) => {
  return (
    <ul className={friendList.list}>
          {friends.map(friend => {
              return (
                  <li key={friend.id}>
                      <FriendlistItem
                          avatar={friend.avatar}
                          name={friend.name}
                          isOnline={friend.isOnline}/>
            </li>
        )
    })}
	
</ul>
  )
}

export default FriendList
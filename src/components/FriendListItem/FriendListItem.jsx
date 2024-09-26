import friendListItem from './FriendListItem.module.css'


const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={friendListItem.card}>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={isOnline? friendListItem.online : friendListItem.offline}>{isOnline ? 'Online' : 'Offline'}</p>
</div>
  )
}

export default FriendListItem
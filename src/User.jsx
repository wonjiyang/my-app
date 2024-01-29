const User = ({user}) => {
    // const {user} = props
    return (
        <>
        <img src={user.img} alt={user.alt} />
        <strong>{user.name}</strong>
        </>
    )
}

export default User
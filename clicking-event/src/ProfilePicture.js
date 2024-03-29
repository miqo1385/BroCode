function ProfilePicture(){
    const imageUrl= "BroCode/clicking-event/src/46.jpeg";

    const handleClick = (e) => e.target.style.display = 'none';
    return(<img onClick={(e) => handleClick(e)} src = {imageUrl}></img>);


}

export default ProfilePicture
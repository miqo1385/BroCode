import PropTypes from "prop-types";

function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2 className="true">Welcome {props.username}</h2>
    }
    else{
        return <h2 className="false">Please Log in to continue</h2>
    }


}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",

}
export default UserGreeting
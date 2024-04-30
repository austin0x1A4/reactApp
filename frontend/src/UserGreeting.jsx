import PropTypes from 'prop-types';
function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>
    return(props.isLoggedIn ? welcomeMessage : loginPrompt
    
);

}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.string,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: "Guest",

}
export default UserGreeting
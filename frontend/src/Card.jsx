import profilePic from './assets/profpic.jpeg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="prof pic"></img>
            <h2 className="card-title">Austin M</h2>
            <p className="card-text">Whatever I do for a living</p>

        </div>
    );

}
export default Card
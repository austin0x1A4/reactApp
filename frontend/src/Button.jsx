
function Button(){
    //const handleClick = () => console.log("OUCH");
    let count = 0;
    const handleClick2 = (name) => {
        if(count <3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me!`) 
        }
 
    }
    return(
        <button onClick={() => handleClick2("Austin")}>click me</button>
    );
}
export default Button
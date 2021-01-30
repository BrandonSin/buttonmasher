import './App.css';
import * as React from "react";
import Spritesheet from 'react-responsive-spritesheet';
import spriteAttack from "./images/spriteSheet/attackSheet.png";
import spriteIdle from "./images/spriteSheet/idleSheet.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import wormAttack from "./images/spriteSheet/Attack.png";
import wormDeath from "./images/spriteSheet/death1.png";
import spriteDead from "./images/spriteSheet/heroDead.png";





function Attack() {
    const [gamePhase, setgamePhase] = React.useState(0);
    const [clickCounter, setClickCounter] = React.useState(0);
    const [Health, setHealth] = React.useState(100);
    const [attack, setAttack] = React.useState(0);
    


    function attackCharge(){
        console.log("Game Phase " + gamePhase);
        setClickCounter(clickCounter + 0.1);
        setHealth(Health - clickCounter);
        //Since progressBar cannot display negative value, following condition will set health to 0 
        if((Health) <= 0){
            setHealth(0);
            setAttack(1);
        }
        console.log("Mouse Clicked " + clickCounter);
        
        if(gamePhase == 0){
            setgamePhase(1);
            setCounter(14);
            setText1("Keep Attacking!");

            
        }
        if(gamePhase == 3 || counter == 0){
            setgamePhase(0);
            setHealth(100);
            setClickCounter(0);
            setText("Mash the Red button to Attack the Monster Before the Timer Ends");
            setText1("Start");
            setAttack(0);
            setCounter(15);
            
        }
        if(attack == 1 && gamePhase == 1){
            setgamePhase(3);
            setText1("Ember Restored");
            setText("You Have Defeated the Boned Caterpillar, Press the Red Button to Restart");

        }
    
    }
//https://codesandbox.io/s/simple-react-countdown-timer-zyfr0?file=/src/index.tsx for the logic of the timecounter
    const [counter, setCounter] = React.useState(15);
        React.useEffect(() => {
            console.log("counter" + gamePhase);
            if(gamePhase == 1){
               counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
            }
        
        },[counter]);
            
    

    

    const [text, setText] = React.useState("Mash the Red button to Attack the Monster Before the Timer Ends");
    const [text1, setText1] = React.useState("Start");

    React.useEffect(() =>{
        if(counter == 0){
            setText("You Died, Press the Red Button to Try Again");
            setText1("Souls Lost");
            setgamePhase(1);

            
        }
    })
    
        
    return (
    
    <div className="attack">
        <header className="App-header">
            <p>{text}</p>
            <div style={{visibility: gamePhase==1 ? 'visible' : 'hidden'}}>{counter}</div>
            <div>{text1}</div>
            <a onClick={attackCharge} className="pulsingButton">
            </a>
            
            <ProgressBar variant="danger" now={Health} />
             
            <a className ="sprite-size" style={{visibility: gamePhase == 0 || gamePhase == 3 ? 'visible' : 'hidden'}}>

                <Spritesheet
                    
                    image={spriteIdle}//spriteIdle, spriteAttack
                    widthFrame = {50}
                    heightFrame = {37}
                    steps = {3}//3 for idle, 17 spriteAttack
                    fps = {3}//3 for Idle, 12 Attack
                    direction = {'rewind'}
                    autoplay = {true}
                    loop = {true}  
                />
            </a>

            <a className ="sprite-size" style={{visibility: gamePhase == 1 && counter > 0 ? 'visible' : 'hidden'}}>

                <Spritesheet
                    
                    image={spriteAttack}//spriteIdle, spriteAttack
                    widthFrame = {50}
                    heightFrame = {37}
                    steps = {17}//3 for idle, 17 spriteAttack
                    fps = {12}//3 for Idle, 12 Attack
                    direction = {'rewind'}
                    autoplay = {true}
                    loop = {true}  
                />
            </a>
            <a className ="sprite-size" style={{visibility: counter == 0 ? 'visible' : 'hidden'}}>

                <Spritesheet
                    
                    image={spriteDead}//spriteIdle, spriteAttack
                    widthFrame = {50}
                    heightFrame = {37}
                    steps = {3}//3 for idle, 17 spriteAttack
                    fps = {3}//3 for Idle, 12 Attack
                    direction = {'rewind'}
                    autoplay = {true}
                    loop = {true}  
                />
            </a>
            <a className ="sprite-size1" style={{visibility: gamePhase == 1 || counter == 0? 'visible' : 'hidden'}}>
                <Spritesheet
                    image={wormAttack}//spriteIdle, spriteAttack
                    widthFrame = {90}
                    heightFrame = {90}
                    steps = {16}//3 for idle, 17 spriteAttack
                    fps = {12}//3 for Idle, 12 Attack
                    direction = {'forward'}
                    autoplay = {true}
                    loop = {true}  
                />
                </a>
                <a className ="sprite-size1" style={{visibility:  gamePhase == 3 ? 'visible' : 'hidden'}}>
                <Spritesheet
                    image={wormDeath}//spriteIdle, spriteAttack
                    widthFrame = {90}
                    heightFrame = {90}
                    steps = {1}//3 for idle, 17 spriteAttack
                    fps = {1}//3 for Idle, 12 Attack
                    direction = {'forward'}
                    autoplay = {true}
                    loop = {true}  
                />
                </a>
            
        </header>
    </div>
  );
}

export default Attack;

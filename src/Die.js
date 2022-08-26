import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
        {props.value !== 1 ? 
            <div className = "dot a"></div>:
            <div className = "blankDot"></div>
            }
            
            
            <div className = "blankDot"></div>
            
        {[4,5,6].includes(props.value) ? 
            <div className = "dot b"></div>:
            <div className = "blankDot"></div>
            }
            
        {props.value === 6 ? 
            <div className = "dot c"></div>:
            <div className = "blankDot"></div>
            }
            
        {[1,3,5].includes(props.value) ? 
            <div className = "dot d"></div>:
            <div className = "blankDot"></div>
            }
            
        {props.value === 6 ? 
            <div className = "dot e"></div>:
            <div className = "blankDot"></div>
            }
            
        {[4,5,6].includes(props.value) ? 
            <div className = "dot f"></div>:
            <div className = "blankDot"></div>
            }

            <div className = "blankDot"></div>

        {props.value !== 1 ? 
            <div className = "dot g"></div>:
            <div className = "blankDot"></div>
        }
            
        </div>
        
        
    )
}
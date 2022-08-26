import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rollCount, setRollCount] = React.useState(0)
    const [lastRolls, setLastRolls] = React.useState("N/A")
    const [highScore, setHighScore] = React.useState(localStorage.getItem("bestScore") || "N/A")
    const [rollHistory, setRollHistory] = React.useState(localStorage.getItem("rollHistory") || [])


    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            setLastRolls(rollCount)
            rollHistory.push(rollCount)
            setHighScore(Math.min(...rollHistory))
        }
    }, [dice])
    
    React.useEffect(() => {
        localStorage.setItem("bestScore", highScore)}, [highScore])
    React.useEffect(() => {
        localStorage.setItem("rollHistory", rollHistory)}, [rollHistory])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
            
            if (dice.every(die => die.isHeld)){
                setRollCount(oldCount => oldCount)
            } else{
                setRollCount(oldCount => oldCount += 1)
            }
        } else {
            setRollCount(0)
            setTenzies(false)
            setDice(allNewDice())
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={!tenzies ? () => holdDice(die.id) : () => "" }
        />
    ))
    
    const buttonStyle = {
        backgroundColor: !tenzies ?  "#5035FF" : "#058216"
    }
    
    return (
        <div className = "top">
            <main>
                {tenzies && <Confetti />}
                <h1 className="title">🎲 Tenzies 🎲</h1>
                <p className="instructions">Roll until all dice are the same. 
                Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements}
                </div>
                <h2 className="rollCount">Number of Rolls: {rollCount}</h2>
                <h3 className="rollCount">Rolls from Last Game: {lastRolls}</h3>
                <h4 className="rollCount">High Score (Lowest Number of Rolls): {highScore}</h4>
                <button 
                    className="roll-dice" 
                    onClick={rollDice}
                    style={buttonStyle}
                >
                    {tenzies ? "New Game" : "Roll"}
                </button>
            </main>
        </div>
    )
}
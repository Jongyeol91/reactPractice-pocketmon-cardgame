import React, {Component} from 'react'
import Pocketdex from './Pocketdex'

class PocketGame extends Component{
    static defaultProps = {
        pocketmon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }

    
    render(){
        let hand1 = [...this.props.pocketmon]
        let hand2 = []
        while(hand1.length > hand2.length) {
            let randomIdx = Math.floor(Math.random() * hand1.length);
            console.log(randomIdx)
            let randomPocketmon = hand1.splice(randomIdx, 1)[0]
            console.log(hand1)
            hand2.push(randomPocketmon)
        }
          
        let totalExp1 = hand1.reduce((acc, cv) => { return acc + cv.base_experience }, 0)
        let totalExp2 = hand2.reduce((acc, cv) => { return acc + cv.base_experience }, 0)
        
        return(
            <div>
                <Pocketdex pocketmon={hand1} totalExp={totalExp1} isWinner={totalExp1 > totalExp2}/>
                <Pocketdex pocketmon={hand2} totalExp={totalExp2} isWinner={totalExp2 > totalExp1}/>
            </div>
        )
    }
}

export default PocketGame;
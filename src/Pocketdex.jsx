import React, { Component } from 'react'
import Pocketcard from './Pocketcard'
import './Pocketdex.css'
class Pocketdex extends Component {

    render() {
        let title
        if(this.props.isWinner){
            title = <h1 className="Pocketdex-winner">winner</h1>
        } else {
            title = <h1 className="Pocketdex-loser">loser</h1>
        }
        return (
            <div className="Pocketdex">
                <h1> 포켓몬 조합 </h1>
                <button>다시 조합</button>
                <p>총 능력치{this.props.totalExp}</p>
                {title}
                <div className="Pocketdex-cards">
                    {
                        this.props.pocketmon.map((p) => (
                            <Pocketcard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Pocketdex;
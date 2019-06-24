import React, {Component} from "react"
import './Pocketcard.css';

//const pocket_api = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const pocket_api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
let patToThree = (number) => ( number <= 999 ? `00${number}`.slice(-3): number) // 00 + 마지막 3개 인덱스 (001 => 001, 0011 => 011, 00111 => 111)
class Pocketcard extends Component {
    render () {
        let imgSrc = `${pocket_api}${patToThree(this.props.id)}.png`
        return (
            <div className="Pocketcard">
                <h1 className="Pocketcard-title">{this.props.name}</h1>
                <div className="Pocketcard-image">
                    <img src={imgSrc} alt={this.props.name}></img>
                </div>
                <div className="Pocketcard-data"> type: {this.props.type}</div>
                <div className="Pocketcard-data"> exe: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default Pocketcard;

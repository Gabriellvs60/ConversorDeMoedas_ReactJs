import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component{
  
    constructor(props){
        super(props);

        this.state={
            moedaA_valor:"",
            moedaB_valor: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter(){
     
            let cotacao = 4;
            let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao).toFixed(2));
            this.setState({moedaB_valor})
        
            
    }
//13:58
//onchange dispara um evento que pega o target e o valor dentro dele
    render(){
    return(
        <div className="conversor">
           <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
           <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}></input>
           <input type="button" value="Converter" onClick = {this.converter}></input>
           <h2>{this.state.moedaB_valor}</h2>
        </div>
    )
}
}
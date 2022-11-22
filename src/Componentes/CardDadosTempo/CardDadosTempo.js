import React from 'react'
import Styles from './CardDadosTempo.module.css'

const CardDadosTempo = (props) => {
  return (
    <div className={Styles.card}>
      <p style={{fontSize:'25px'}}>{props.cidade}, {props.pais}</p>
      <p><b style={{fontSize:'25px'}}> {props.temperatura}ºC  <img width={35} src={props.icon} alt="icone"/></b></p>
      <p className={Styles.descricao}><b >{props.descricao}</b></p>
      <p><b>Pressão:</b>  {props?.pressao}hPa - <b>Umidade:</b>{props.umidade}%</p>
      <p><b>Vento:</b> {props.vento?.speed}m/s - <b>Sensação Térmica: </b>{props.sensacaoTermica}ºC</p>
     
    </div>
  )
}

export default CardDadosTempo
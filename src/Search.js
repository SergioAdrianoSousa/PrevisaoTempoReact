import { useState } from 'react'
import CardDadosTempo from './Componentes/CardDadosTempo/CardDadosTempo'
import { useNavigate } from 'react-router-dom';
import './App.css'

function Search(props) {


    const [cidade, setCidade] = useState("")
    function searchInput(e) {

        const API_KEY = '7ce2b9584a8f730ac34db0953e684e69'

        e.preventDefault()
        let currentValue = document.querySelector('input[name=searchInput]').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=${API_KEY}&units=metric&lang=pt`;
        fetch(url)

            .then(response => response.json())
            .then(data => {
                const { main, name, sys, weather, wind } = data;



                if (sys !== undefined) {

                    if (weather !== undefined) {
                        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`
                        setCidade(<CardDadosTempo icon={icon} temperatura={main.temp} umidade={main.humidity} sensacaoTermica={main.feels_like}
                            pais={sys.country} cidade={name} descricao={weather[0]?.description} pressao={main.pressure} vento={wind} />)

                    }
                } else {
                    setCidade("");
                }

            })
    }
    const navigate = useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className='botaonav'>
                    <input className='btn btn-outline-success my-2 my-sm-0 m-3 ' type="submit" onClick={() => navigate("/page2")} value="Previsão Aleatória" />
                </div>
                <a className="navbar-brand text-white m-1  " href="#top">
                    Previsão do Tempo
                </a>

            </nav>

            <div className=" card bg-light text-center m-5 p-5">
                <h4 className="m-2">
                    Verifique a previsão do tempo da sua cidade.
                </h4>
                <p className="lead text-muted">
                    Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar.
                </p>


                <div className='previsao'>
                    {cidade}
                </div>


                <div className=" mb-2 ">

                    <form onSubmit={(e) => searchInput(e)}>
                        <input className="col-md-6  p-1" placeholder={props.placeholder} type="text" name="searchInput" />
                        <input className='btn btn-outline-success my-2 my-sm-0 m-5' type="submit" value="Pesquisar" />
                    </form>

                </div>

            </div>

        </div>
    );
}

export default Search;
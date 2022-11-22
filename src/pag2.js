import { useState } from 'react'
import CardDadosTempo from './Componentes/CardDadosTempo/CardDadosTempo'
import './App.css'




const Page2 = () => {

    const [cidade, setCidade] = useState()
    const estados = [
        { "capital": "Rio Branco" },
        { "capital": "Maceio" },
        { "capital": "Macapa" },
        { "capital": "Manaus" },
        { "capital": "Salvador" },
        { "capital": "Fortaleza	" },
        { "capital": "Brasilia" },
        { "capital": "Vitoria " },
        { "capital": "Goiânia" },
        { "capital": "Sao Luis" },
        { "capital": "Cuiaba" },
        { "capital": "Campo Grande" },
        { "capital": "Belo Horizonte" },
        { "capital": "Belem" },
        { "capital": "Joao Pessoa" },
        { "capital": "Curitiba" },
        { "capital": "Recife" },
        { "capital": "Teresina" },
        { "capital": "Rio de Janeiro" },
        { "capital": "Natal" },
        { "capital": "Porto Alegre" },
        { "capital": "Porto Velho" },
        { "capital": "Boa Vista" },
        { "capital": "Florianopolis" },
        { "capital": "Sao Paulo	" },
        { "capital": "Aracaju	" },
        { "capital": "Palmas" },
    ]
    function gerarNumeroAleatorio(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function searchInput() {

        const API_KEY = '4d8fb5b93d4af21d66a2948710284366'
        const cidade = estados[gerarNumeroAleatorio(0, estados.length)].capital
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`;
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
                    setCidade();
                }

            })
    }
    function sortear() {
        setInterval(() => {
            searchInput()
        }, 5000);

    }


    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-warning mb-4">

                <a className="navbar-brand text-white m-1 " href="#top">
                    Previsão do Tempo nos Estados do Brasil
                </a>
            </nav>
            <div className=" card bg-light text-center m-5 p-4">
                <div>
                    <div className='previsao'>
                        {cidade}
                    </div>
                    <button className='col-md-6 btn btn-outline-success my-2 my-sm-0' onClick={sortear} type='primary'>Previsão</button>
                </div>

            </div>
        </div>
    )

}
export default Page2

import hexToRgba from 'hex-to-rgba';
import './time.css'
import Desenvolvedor from '../Desenvolvedor';

const Time = ({ time, desenvolvedores, aoDeletar, aoFavoritar }) => {
    return (

        desenvolvedores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {desenvolvedores.map((desenvolvedor, indice) => <Desenvolvedor key={indice} desenvolvedor={desenvolvedor} corDeFundo={time.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />)}
            </div>
        </section>

    )
}

export default Time
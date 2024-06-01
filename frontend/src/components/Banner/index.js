import './banner.css'
import banner from '../../imagens/banner.png'

const Banner = () => {
    return (
    <header className="cabecalho">
        <img src={banner} alt='Logo do Organo'/>
    </header>)
}

export default Banner
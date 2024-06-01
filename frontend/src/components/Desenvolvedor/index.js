import './desenvolvedor.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';

const Desenvolvedor = ({ desenvolvedor, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(desenvolvedor.id);
    }
    return (<div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={desenvolvedor.imagem} alt={desenvolvedor.nome} className='rounded-circle img-fluid'/>
        </div>
        <div className="rodape">
            <h4>{desenvolvedor.nome}</h4>
            <h5>{desenvolvedor.cargo}</h5>
            <div className='favorito'>
                {desenvolvedor.favorito ? <AiFillHeart color="#ff0000" size={25} onClick={favoritar} /> : <AiOutlineHeart size={25} onClick={favoritar} />}
            </div>
        </div>
    </div>)
}

export default Desenvolvedor;
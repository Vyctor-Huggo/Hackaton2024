import Banner from "../../components/Banner";
import Time from "../../components/Time";
import davi from './../../imagens/davi.png'
import guilherme from './../../imagens/guilherme.png'
import felipe from './../../imagens/felipe.png'
import pedro from './../../imagens/pedro.png'
import vyctor from './../../imagens/vyctor.png'
import Rodape from "../../components/Rodape";
import Header from "../../components/Header";

const equipe = {
    id: 1,
    nome: 'Equipe de Desenvolvimento',
    cor: '#57C278'
  };
  
  const desenvolvedores = [
    {
        id: 1,
        nome: 'Davi Oliveira Teobaldo',
        cargo: 'Desenvolvedor Front-end',
        imagem: davi,
        favorito: true
    },
    {
        id: 2,
        nome: 'Guilherme Rodrigues da Silva',
        cargo: 'Desenvolvedor Back-end',
        imagem: guilherme,
        favorito: true
    },
    {
        id: 3,
        nome: 'Pedro de Alexandre Castro',
        cargo: 'Designer UX/UI',
        imagem: pedro,
        favorito: true
    },
    {
        id: 4,
        nome: 'Vyctor Huggo',
        cargo: 'Desenvolvedor Back-end',
        imagem: vyctor,
        favorito: true
    },
    {
        id: 5,
        nome: 'Felipe Hidetoshi',
        cargo: 'Designer UX/UI',
        imagem: felipe,
        favorito: true
    }
  ];

function DesenvolvedoresPage() {
    return (
        <div>
          <Header/>
      <Banner></Banner>
      <Time
        time={equipe}
        desenvolvedores={desenvolvedores}
        aoDeletar={(id) => console.log(`Deletando desenvolvedor com ID ${id}`)}
        mudarCor={(cor, id) => console.log(`Mudando cor do time com ID ${id} para ${cor}`)}
        aoFavoritar={(id) => console.log(`Favoritando desenvolvedor com ID ${id}`)}
      />
      <Rodape/>
    </div>
    );
}

export default DesenvolvedoresPage;
import { Cesta } from '../types/Cesta';

const logo = require('../../assets/logo.png');
const imagemCesta = require('../../assets/topo.png');

const cesta: Cesta = {
  topo: {
    imagem: imagemCesta,
    titulo: 'Detalhes da cesta',
  },
  detalhes: {
    nome: 'Cesta de verduras',
    logoFazenda: logo,
    nomeFazenda: 'Jenny Jack Farm',
    descricao:
      'Uma cesta com produtos cuidadosamente selecionados da fazenda diretamente para a sua cozinha.',
    preco: 'R$ 40,00',
  },
};

export default cesta;

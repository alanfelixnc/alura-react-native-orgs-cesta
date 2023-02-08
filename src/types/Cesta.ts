import { ImageSourcePropType } from 'react-native';

export interface Cesta {
  topo: {
    imagem: ImageSourcePropType;
    titulo: string;
  };
  detalhes: {
    nome: string;
    logoFazenda: ImageSourcePropType;
    nomeFazenda: string;
    descricao: string;
    preco: string;
  };
}

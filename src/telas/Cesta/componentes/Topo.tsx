import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import Texto from '../../../componentes/Texto';

const width = Dimensions.get('screen').width;

type Props = {
  titulo: string;
  imagem: ImageSourcePropType;
};

function Topo({ titulo, imagem }: Props) {
  return (
    <>
      <Image source={imagem} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  titulo: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Topo;

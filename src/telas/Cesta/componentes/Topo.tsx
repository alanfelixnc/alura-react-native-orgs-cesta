import { Dimensions, Image, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';

const topo = require('../../../../assets/topo.png');

const width = Dimensions.get('screen').width;

function Topo() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
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

import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

function Texto({ children, style }: Props) {
  let estilo = estilos.texto;
  if (style?.['fontWeight'] === 'bold') estilo = estilos.textoNegrito;

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
});

export default Texto;

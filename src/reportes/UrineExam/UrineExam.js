import React from 'react';
import { Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import exUrineObject from './UrineExamData.json'
import robotoFont from '../font/RobotoMono-VariableFont_wght.ttf'
import DatosGenerales from '../Template'
import Serologia from '../Serologia'
import Bactereologia from '../Bactereologia'
import Basiloscopia from '../Basiloscopia'
//https://styled-components.com/docs/basics#getting-started

Font.register({family: 'Roboto', src :robotoFont})
const styles = StyleSheet.create({
    titulo:{
        fontSize: '16px',
        borderBottom: '2px'
      },
    tabla:{
        flexDirection: 'column'
    },
    filaEncabezado: {
        flexDirection: 'row',
        justifyContent:'space-around',
        borderBottom: '1px'
    },
    fila: {
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    content:{
        margin: 5,
        padding: 5
    }
});

const datosExamen = Object.entries(exUrineObject);

const Lista = datosExamen.map((fila) =>
<View style={styles.fila}>
    <Text>{fila[0].padEnd(20,' ')}</Text>
    <Text>{fila[1]}</Text>
</View>
);

const ViewExamenOrina = () =>(
<View style={styles.content}>
    <Text style={styles.titulo}>Examen de Orina</Text>
    <View style={styles.tabla}>
        <View style={styles.filaEncabezado}>
            <Text>Examen</Text>
            <Text>Resultados</Text>
        </View>
        {Lista}
    </View>
</View>
);

function ExamenOrina(){
   return( 
   
   <Document title="Examen de Orina" author="FinLays">
        <DatosGenerales>
			<ViewExamenOrina/>
            
        </DatosGenerales>
        <DatosGenerales>
            <Serologia vdrl="undefined gg" factor_rematoideo="me too gg"/>
            <Bactereologia exudado="nani?" coprocultivo="help me" hisopado_manos="test"/>
            <Basiloscopia baar="te quedan 3 semanas de vida"/>
        </DatosGenerales>
    </Document>
    
    )

}
function ExamenOrinaBasic(){
    return( 
    
    <Document title="Examen de Orina" author="FinLays">
         <DatosGenerales>
             <ViewExamenOrina/>
         </DatosGenerales>
     </Document>
     
     )
 
 }



export {ExamenOrina, ExamenOrinaBasic };
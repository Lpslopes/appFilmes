import React, {useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhe from "../Detalhe";


export default function Filmes({data}){

    const [visibleModal, setVisiblaModal] = useState(false)

    return(
        <View>
           <View style={styles.card}>
            <Text style={styles.titulo}>{data.nome}</Text>
            <Image
            source= {{uri: data.foto}}
            style={styles.capa}
            />
            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={() => setVisiblaModal(true)}>
                    <Text style={styles.botaoTexto}>LEIA MAIS!</Text>
                </TouchableOpacity>
            </View>

            <Modal  transparent={true} animationType="slide" visible={visibleModal}>
                <Detalhe filme={data} voltar={ () => setVisiblaModal(false) }/>
            </Modal>

           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 2,

    },
    capa:{
        height: 250,
        zIndex: 2,
    },
    titulo:{
        fontSize: 18,
        padding: 15,
        fontStyle: 'italic',
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9,
    },
    botao:{
        backgroundColor: '#09a6ff',
        width: 100,
        padding: 8,
        opacity: 1,
    },
    botaoTexto:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})


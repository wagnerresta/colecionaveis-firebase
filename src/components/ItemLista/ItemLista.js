import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloItemLista from './estiloItemLista';
import { LinearGradient } from 'expo-linear-gradient';

const ItemLista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloItemLista.areaItens}>

            <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
                <Text style={estiloItemLista.itemTitulo}> {item.titulo} </Text>
            </LinearGradient>
            <Text style={estiloItemLista.itemSubTitulo}> {item.autor} ({item.anoPublicacao}) </Text>
            
            <LinearGradient colors={['#92afd7', '#92afd7', '#14417b']}>
                <Image 
                    resizeMode='contain'
                    style={estiloItemLista.itemFoto}
                    source={item.foto}
                />
            </LinearGradient>

        </View>
    );
}

export default ItemLista;
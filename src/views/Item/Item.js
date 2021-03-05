import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloItem from './estiloItem';

function Item({route, navigation }) {
 
   const { item } = route.params;
   console.log(item);
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}>Item</Text>
                <Text style={estiloItem.texto}>{item.item.descricao}</Text>
                <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Item;

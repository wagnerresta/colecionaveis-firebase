import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList,Image } from 'react-native';
import estiloColecao from './estiloColecao';
import ItemLista from '../../components/ItemLista/ItemLista';
import { MaterialIcons } from '@expo/vector-icons';
import estiloItemLista from '../../components/ItemLista/estiloItemLista';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState( [
        {
            id: '1',
            titulo: 'Admirável Mundo Novo',
            descricao: 'Um clássico moderno, o romance distópico de Aldous Huxley é indispensável para quem busca leituras sobre autoritarismo, manipulação genética, ficção especulativa e outros temas que, embora tenham surgido com força durante a primeira metade do século XX, se tornam cada dia mais atuais.',
            autor: 'Aldous Huxley',
            anoPublicacao: '1932',                                                    
            foto: require('../../../assets/itens/1.jpg'),
        },
        {
            id: '2',
            titulo: '1984',
            descricao: 'Uma das obras mais contundentes e influentes do século XX ganha nova e definitiva edição com projeto especial e ampla fortuna crítica. Romance incontornável, 1984 continua sendo o livro ao qual nos voltamos sempre que se mutila a verdade, distorce-se a linguagem e viola-se o poder.',
            autor: 'George Orwell',
            anoPublicacao: '1949',
            foto: require('../../../assets/itens/2.jpg'),
        },
        {
            id: '3',
            titulo: 'Laranja Mecânica',
            descricao: 'Publicado pela primeira vez em 1962, e imortalizado 9 anos depois pelo filme de Stanley Kubrick, Laranja Mecânica não só está entre os clássicos eternos da ficção como representa um marco na cultura pop do século 20.',
            autor: 'Anthony Burgess',
            anoPublicacao: '1962',                                                    
            foto: require('../../../assets/itens/3.jpg'),
        },
        {
            id: '4',
            titulo: 'Neuromancer',
            descricao: 'O Céu sobre o porto tinha cor de televisão num canal fora do ar. Considerada a obra precursora do movimento cyberpunk e um clássico da ficção científica moderna, Neuromancer conta a história de Case, um cowboy do ciberespaço e hacker da matrix.',
            autor: 'William Gibson',
            anoPublicacao: '1984',                                                    
            foto: require('../../../assets/itens/4.jpg'),
        }                
                                            ] );


    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    const selectItem = (item) => {
        console.log('chegou no select item');
        navigation.navigate('Item', {
            item: item,
            otherParam: 'anything you want here',
          });
        
    }
     const listItem = ({item}) => {
        return (
            <View  style={estiloItemLista.areaItens}>
                  <TouchableOpacity onPress={() => selectItem({item})}>
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
                </TouchableOpacity>
            </View>
        )
    }
    
    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={({item}) => listItem ({item}) }
                />

        </View>
    )
}

export default Colecao;

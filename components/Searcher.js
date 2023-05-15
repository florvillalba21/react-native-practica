import { View, TextInput, StyleSheet } from 'react-native';
export const Searcher = () =>{

    return(
            <TextInput style={styles.inputSearch} placeholder='Buscar un personaje'/>
            
    )
}


const styles = StyleSheet.create({
    inputSearch :{
        height: 40,
        width: 50
    }
})
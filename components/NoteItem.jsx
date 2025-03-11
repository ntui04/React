import { View, Text,StyleSheet } from "react-native";
const NoteItem = ({note}) => {
    return ( 
         <View style={styles.item}>
             <Text style={styles.noteText}>{note.text}</Text>
         </View>
     );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: 'lightblue',
        marginTop: 10,
        borderRadius: 10,
    },
    noteText: {
        fontSize: 20,
    },
})
export default NoteItem;
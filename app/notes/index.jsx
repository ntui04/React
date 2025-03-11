import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native-web";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
    const [notes, setNotes] = useState([
        { id: '1', text: 'Notes One' },
        { id: '2', text: 'Notes Two' },
        { id: '3', text: 'Notes Three' },
        { id: '4', text: 'Notes Four' },
        { id: '5', text: 'Notes Five' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [noteText, setNewnote] = useState('');

    const addNote = () => {
        if (noteText.trim() === '') return;

        setNotes((prevNotes) => [
            ...prevNotes,
            { id: Date.now().toString(), text: noteText }
        ]);

        setNewnote('');
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <NoteList notes={notes} />

            <TouchableOpacity style={styles.addbutton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Add notes</Text>
            </TouchableOpacity>

            <AddNoteModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                noteText={noteText}
                setNewnote={setNewnote}
                addNote={addNote}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    addbutton: {
        backgroundColor: '#007bff',
        position: 'absolute',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        bottom: 20,
        length: 20,
        right: 20,
        padding: 15,
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default NoteScreen;
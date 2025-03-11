import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native-web";
import axios from 'axios';
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
    const [notes, setNotes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [noteText, setNewnote] = useState('');
    const [editingNote, setEditingNote] = useState(null);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const response = await axios.get('http://localhost:5000/notes');
        setNotes(response.data);
    };

    const addNote = async () => {
        if (noteText.trim() === '') return;

        if (editingNote) {
            const response = await axios.put(`http://localhost:5000/notes/${editingNote.id}`, { text: noteText });
            setNotes((prevNotes) =>
                prevNotes.map((note) =>
                    note.id === editingNote.id ? response.data : note
                )
            );
            setEditingNote(null);
        } else {
            const response = await axios.post('http://localhost:5000/notes', { text: noteText });
            setNotes((prevNotes) => [...prevNotes, response.data]);
        }

        setNewnote('');
        setModalVisible(false);
    };

    const editNote = (note) => {
        setNewnote(note.text);
        setEditingNote(note);
        setModalVisible(true);
    };

    const deleteNote = async (noteId) => {
        await axios.delete(`http://localhost:5000/notes/${noteId}`);
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.noteText}>{item.text}</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity onPress={() => editNote(item)} style={styles.editButton}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteNote(item.id)} style={styles.deleteButton}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    item: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    noteText: {
        fontSize: 18,
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default NoteScreen;
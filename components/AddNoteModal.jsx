import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput } from "react-native-web";

const AddNoteModal = ({ modalVisible, setModalVisible, noteText, setNewnote, addNote }) => {
    return (
        <Modal visible={modalVisible} animationType='slide' transparent
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Add a new note</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter note..."
                        placeholderTextColor='#aaa'
                        value={noteText}
                        onChangeText={setNewnote}
                    />
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelButtontext}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.savelButton} onPress={addNote}>
                            <Text style={styles.savelButtontext}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    cancelButtontext: {
        color: 'white',
        fontWeight: 'bold',
    },
    savelButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    savelButtontext: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default AddNoteModal;
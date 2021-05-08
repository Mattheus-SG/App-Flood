import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deixe um comentário: </Text>
            <TextInput style={styles.input} />
            <Text style={styles.modalText2}>Selecione o nivel da alerta: </Text>
            <View style={styles.alertIconsView}>

                <TouchableOpacity>
                    <Icon name="minus-circle" size={42} color="#BE0000" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="minus-circle" size={42} color="#FB7D00" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="minus-circle" size={42} color="#E2D51E" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="minus-circle" size={42} color="#23B700" />
                </TouchableOpacity>

            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: '86%',
    margin: 20,
    backgroundColor: "#E9E9E9",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 50,
    width: '70%',
    padding: 16,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#225051",
  },
  textStyle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: '10%',
    fontSize: 16,
    textAlign: "center",
    color: '#3D3D3D'
  },
  modalText2: {
    marginBottom: '7%',
    marginTop: '10%',
    fontSize: 15,
    textAlign: "center",
    color: '#3D3D3D'
  },
  alertIconsView: {
    flexDirection: 'row',
    width: '78%',
    justifyContent: 'space-between',
    marginBottom: '10%'
  },
  input: {
    width: '94%',
    fontSize: 16,
    padding: 5,
    marginTop: '2%',
    borderBottomWidth: 2,
    borderBottomColor: '#808080'
  }
});

export default App;
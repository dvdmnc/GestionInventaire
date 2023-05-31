import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

const PatientCategory = () => {
  const [patients, setPatients] = useState([]);
  const [expandedPatientId, setExpandedPatientId] = useState('');
  const [newPatientName, setNewPatientName] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  const handleToggleAccordion = (patientId) => {
    if (expandedPatientId === patientId) {
      setExpandedPatientId('');
    } else {
      setExpandedPatientId(patientId);
    }
  };

  const handleAddPatient = (name) => {
    if (name.trim() === '') {
      return; // Don't add empty patient names
    }

    const newPatient = {
      id: Date.now().toString(),
      name: name.trim(),
      inStockItems: [],
      toOrderItems: [],
    };

    setPatients((prevPatients) => [...prevPatients, newPatient]);
    setNewPatientName(''); // Clear the input field
  };

  const handleDeletePatient = (patientId) => {
    setPatients((prevPatients) =>
      prevPatients.filter((patient) => patient.id !== patientId)
    );
  };

  const handleAddToStock = (patientId) => {
    if (newItemName.trim() === '' || newItemQuantity.trim() === '') {
      return; // Don't add empty item name or quantity
    }

    setPatients((prevPatients) =>
      prevPatients.map((patient) => {
        if (patient.id === patientId) {
          const newItem = {
            name: newItemName.trim(),
            quantity: parseInt(newItemQuantity.trim(), 10),
          };

          const updatedInStockItems = [...patient.inStockItems, newItem];

          return { ...patient, inStockItems: updatedInStockItems };
        }
        return patient;
      })
    );

    setNewItemName('');
    setNewItemQuantity('');
  };

  const handleReduceQuantity = (patientId, itemName) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) => {
        if (patient.id === patientId) {
          const updatedInStockItems = patient.inStockItems.map((item) => {
            if (item.name === itemName && item.quantity > 0) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });

          const itemToMove = updatedInStockItems.find(
            (item) => item.name === itemName && item.quantity === 0
          );

          if (itemToMove) {
            const updatedToOrderItems = [...patient.toOrderItems, itemToMove];
            updatedInStockItems.splice(
              updatedInStockItems.indexOf(itemToMove),
              1
            );

            return {
              ...patient,
              inStockItems: updatedInStockItems,
              toOrderItems: updatedToOrderItems,
            };
          }

          return { ...patient, inStockItems: updatedInStockItems };
        }
        return patient;
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.patientsContainer}>
          {patients.map((patient) => (
            <View key={patient.id} style={styles.patient}>
              <TouchableOpacity
                onPress={() => handleToggleAccordion(patient.id)}
              >
                <Text style={styles.patientName}>{patient.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeletePatient(patient.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>Supprimer</Text>
              </TouchableOpacity>

              {expandedPatientId === patient.id && (
                <View>
                  <Text style={styles.categoryTitle}>En Stock:</Text>
                  {patient.inStockItems.map((item, index) => (
                    <View key={index} style={styles.item}>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity
                          onPress={() => handleReduceQuantity(patient.id, item.name)}
                        >
                          <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.itemQuantity}>{item.quantity}</Text>
                      </View>
                    </View>
                  ))}

                  <View style={styles.addItemContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Nom de l'item"
                      value={newItemName}
                      onChangeText={setNewItemName}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Quantité"
                      value={newItemQuantity}
                      onChangeText={setNewItemQuantity}
                      keyboardType="numeric"
                    />
                    <Button
                      title="Ajouter"
                      onPress={() => handleAddToStock(patient.id)}
                    />
                  </View>

                  <Text style={styles.categoryTitle}>A commander:</Text>
                  {patient.toOrderItems.map((item, index) => (
                    <View key={index} style={styles.item}>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemQuantity}>{item.quantity}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.addPatientContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nom du patient"
            value={newPatientName}
            onChangeText={setNewPatientName}
          />
          <Button
            title="Ajouter un patient"
            onPress={() => handleAddPatient(newPatientName)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  patientsContainer: {
    marginBottom: 10,
  },
  patient: {
    marginBottom: 10,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemName: {
    marginRight: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButtonText: {
    paddingHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  itemQuantity: {
    marginRight: 10,
  },
  addItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  addPatientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default PatientCategory;

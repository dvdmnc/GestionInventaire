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

  const handleDeleteToOrderItem = (patientId, itemName) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) => {
        if (patient.id === patientId) {
          const updatedToOrderItems = patient.toOrderItems.filter(
            (item) => item.name !== itemName
          );

          return { ...patient, toOrderItems: updatedToOrderItems };
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
            <View key={patient.id} style={styles.patientContainer}>
              <View style={styles.patientHeader}>
                <TouchableOpacity
                  onPress={() => handleToggleAccordion(patient.id)}
                  style={styles.patientNameButton}
                >
                  <Text style={styles.patientName}>{patient.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDeletePatient(patient.id)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteButtonText}>Supprimer</Text>
                </TouchableOpacity>
              </View>

              {expandedPatientId === patient.id && (
                <View>
                  <Text style={styles.categoryTitle}>En Stock:</Text>
                  {patient.inStockItems.map((item, index) => (
                    <View key={index} style={styles.item}>
                      <Text style={styles.itemName}>
                        {item.name} ({item.quantity})
                      </Text>
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity
                          onPress={() =>
                            handleReduceQuantity(patient.id, item.name)
                          }
                          style={styles.reduceQuantityButton}
                        >
                          <Text style={styles.reduceQuantityButtonText}>-</Text>
                        </TouchableOpacity>
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
                      <TouchableOpacity
                        onPress={() =>
                          handleDeleteToOrderItem(patient.id, item.name)
                        }
                        style={styles.deleteToOrderButton}
                      >
                        <Text style={styles.deleteButtonText}>Supprimer</Text>
                      </TouchableOpacity>
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
  patientContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
  },
  patientHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  patientNameButton: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemName: {
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reduceQuantityButton: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  reduceQuantityButtonText: {
    fontWeight: 'bold',
  },
  addItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 5,
  },
  deleteToOrderButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default PatientCategory;

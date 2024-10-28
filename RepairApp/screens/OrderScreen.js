import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OrderScreen = () => {
  const [type, setType] = useState('');
  const [problem, setProblem] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    alert('Заявка отправлена!');
    // Здесь можно добавить код для отправки данных на сервер
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Форма заказа</Text>
      <TextInput
        style={styles.input}
        placeholder="Тип техники"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Описание проблемы"
        value={problem}
        onChangeText={setProblem}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Адрес"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Отправить заявку" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default OrderScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Контакты</Text>
      <Text>Адрес: ул. Примерная, 123</Text>
      <Text>Телефон: +7 (123) 456-78-90</Text>
      <Text>Электронная почта: info@example.com</Text>
      {/* Здесь можно добавить карту */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ContactsScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ManagerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Менеджер</Text>
      <Text style={styles.sectionTitle}>Клиенты</Text>
      <View style={styles.client}>
        <Text style={styles.name}>Иван Петров</Text>
        <Text>Телефон: +7 (123) 456-78-90</Text>
        <Text>Адрес: ул. Примерная, 123</Text>
      </View>
      <View style={styles.client}>
        <Text style={styles.name}>Анна Сидорова</Text>
        <Text>Телефон: +7 (123) 456-78-91</Text>
        <Text>Адрес: ул. Примерная, 124</Text>
      </View>
      <Text style={styles.sectionTitle}>Мастера</Text>
      <View style={styles.master}>
        <Image source={require('../assets/master1.jpg')} style={styles.image} />
        <Text style={styles.name}>Иван Иванов</Text>
        <Text>Специализация: Ремонт холодильников</Text>
        <Text>Рейтинг: ★★★★☆</Text>
      </View>
      <View style={styles.master}>
        <Image source={require('../assets/master2.jpg')} style={styles.image} />
        <Text style={styles.name}>Петр Петров</Text>
        <Text>Специализация: Ремонт стиральных машин</Text>
        <Text>Рейтинг: ★★★★★</Text>
      </View>
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
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  client: {
    marginBottom: 20,
  },
  master: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ManagerScreen;

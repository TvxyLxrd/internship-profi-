import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Отзывы клиентов</Text>
      <View style={styles.review}>
        <Text style={styles.name}>Анна</Text>
        <Text>Дата: 01.01.2023</Text>
        <Text>Отличный сервис! Рекомендую!</Text>
        <Text>Рейтинг: ★★★★★</Text>
      </View>
      <View style={styles.review}>
        <Text style={styles.name}>Сергей</Text>
        <Text>Дата: 02.01.2023</Text>
        <Text>Быстро и качественно. Спасибо!</Text>
        <Text>Рейтинг: ★★★★☆</Text>
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
  review: {
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReviewsScreen;

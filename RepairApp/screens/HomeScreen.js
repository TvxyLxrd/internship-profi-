import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Text style={styles.text}>Мы предлагаем качественный ремонт бытовой техники. Закажите услугу прямо сейчас!</Text>
      <Button title="Заказать услугу" onPress={() => navigation.navigate('Order')} />
      {user && user.role === 'admin' && (
        <Button title="Панель администратора" onPress={() => navigation.navigate('Admin')} />
      )}
      {user && user.role === 'manager' && (
        <Button title="Панель менеджера" onPress={() => navigation.navigate('Manager')} />
      )}
      {user && <Button title="Выйти" onPress={logout} />}
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
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default HomeScreen;

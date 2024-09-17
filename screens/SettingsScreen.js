// screens/SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Switch, Button, Alert } from 'react-native';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleSave = () => {
    Alert.alert("Cài đặt đã được lưu!");
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Cài Đặt</Text>
      <View style={styles.option}>
        <Text style={styles.label}>Chế độ tối:</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
        />
      </View>
      <Button title="Lưu cài đặt" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
});

export default SettingsScreen;

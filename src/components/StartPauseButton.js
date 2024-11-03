import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { PlayIcon, XMarkIcon } from 'react-native-heroicons/outline';

const StartPauseButton = ({ isRunning, onStart, onGiveUp }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={isRunning ? onGiveUp : onStart}
    >
      {isRunning ? (
        <XMarkIcon size={40} color="#FFFFFF" /> // Give Up ikonu olarak X işareti
      ) : (
        <PlayIcon size={40} color="#FFFFFF" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6adc49',
    padding: 15,
    borderRadius: 50,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartPauseButton;

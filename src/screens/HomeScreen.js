import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimerDisplay from '../components/TimerDisplay';
import StartPauseButton from '../components/StartPauseButton';
import { PomodoroContext } from '../context/PomodoroContext';

const HomeScreen = () => {
  const { focusTime } = useContext(PomodoroContext);
  const [timeLeft, setTimeLeft] = useState(focusTime * 60);
  const [isRunning, setIsRunning] = useState(false);

  
  useEffect(() => {
    setTimeLeft(focusTime * 60);
  }, [focusTime]);

  
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(focusTime * 60);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Simple Timer</Text> */}
      <TimerDisplay timeLeft={timeLeft} totalTime={focusTime * 60} />
      <StartPauseButton isRunning={isRunning} onStart={startTimer} onGiveUp={resetTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
});

export default HomeScreen;

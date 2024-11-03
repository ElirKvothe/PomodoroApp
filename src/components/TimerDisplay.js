import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { PomodoroContext } from '../context/PomodoroContext';

const TimerDisplay = ({ timeLeft, totalTime }) => {
  const { focusTime, setFocusTime } = useContext(PomodoroContext);
  const [gestureStartY, setGestureStartY] = useState(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureStartY === null) {
        setGestureStartY(gestureState.moveY);
      } else {
        const deltaY = gestureState.moveY - gestureStartY;

        if (deltaY < -10) { 
          setFocusTime((prev) => Math.min(prev + 1, 60));
          setGestureStartY(gestureState.moveY); 
        } else if (deltaY > 10) { 
          setFocusTime((prev) => Math.max(prev - 1, 1));
          setGestureStartY(gestureState.moveY);
        }
      }
    },
    onPanResponderRelease: () => {
      setGestureStartY(null); 
    },
  });

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <View {...panResponder.panHandlers} style={styles.container}>
      <AnimatedCircularProgress
        size={250}
        width={10}
        fill={(1 - timeLeft / totalTime) * 100}
        tintColor="#6adc49"
        backgroundColor="#3d3d3d"
        lineCap="round"
        duration={800} 
        rotation={0} 
      >
        {() => (
          <Text style={styles.timer}>
            {formatTime(timeLeft)}
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 48,
    color: '#FFFFFF',
  },
});

export default TimerDisplay;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../style/WorkoutHistoryStyles'; 

const WorkoutHistory = ({ route }) => {
  const { workouts } = route.params;
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [sportDistances, setSportDistances] = useState({});

  useEffect(() => {
    if (workouts) {
      setWorkoutHistory(workouts);
    }
  }, [workouts]);

  // Calculate total distance for each sport
  useEffect(() => {
    const distances = {};
    workoutHistory.forEach((workout) => {
      distances[workout.sport] = (distances[workout.sport] || 0) + parseFloat(workout.distance);
    });
    setSportDistances(distances);
  }, [workoutHistory]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        
      </Text>
      
      {Object.keys(sportDistances).map((sport) => (
        <Text  key={sport} style={[styles.sportTotal, styles[`${sport.toLowerCase()}Background`]]}>{`${sport}: ${sportDistances[sport]} km`}</Text>
      ))}
      <FlatList
        data={workoutHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.listItem, styles[`${item.sport.toLowerCase()}Background`]]}>
            <Text style={styles.itemText}>{`${item.date}: ${item.sport}: ${item.distance} km (${item.minutes} minutes)`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default WorkoutHistory;
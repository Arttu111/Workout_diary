import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import styles from '../style/styles';

const SportButton = ({ title, onPress, isSelected }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, isSelected && styles.selectedButton]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const AddWorkout = () => {
  const [sport, setSport] = useState('');
  const [distance, setDistance] = useState('');
  const [minutes, setMinutes] = useState('');
  const [date, setDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(''); 
  const [workouts, setWorkouts] = useState([
    { id: 1, sport: 'Running', distance: '5', minutes: '30', date: '2024-03-15' },
    { id: 2, sport: 'Swimming', distance: '1', minutes: '20', date: '2024-03-16' },
    { id: 3, sport: 'Skiing', distance: '10', minutes: '60', date: '2024-03-17' }
  ]);
  const navigation = useNavigation();

  const handleSportSelection = (selectedSport) => {
    setSport(selectedSport);
  };

  const handleAddWorkout = () => {
    if (sport && distance && minutes && date) {
      const newWorkout = { id: Date.now(), sport, distance, minutes, date };
      setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);
      setSport('');
      setDistance('');
      setMinutes('');
      setDate('');
      setSelectedDate(''); 
    }
  };
  

  const handleShowWorkouts = () => {
    navigation.navigate('WorkoutHistory', { workouts });
  };

  const handleDayPress = (day) => {
    setDate(day.dateString);
    setSelectedDate(day.dateString); 
    setShowCalendar(false);
  };

  const handleDistanceBlur = () => {
    Keyboard.dismiss();
  };

  const handleMinutesBlur = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Select Sport:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SportButton 
          title="Running" 
          onPress={() => handleSportSelection('Running')} 
          isSelected={sport === 'Running'} 
        />
        <SportButton 
          title="Swimming" 
          onPress={() => handleSportSelection('Swimming')} 
          isSelected={sport === 'Swimming'} 
        />
        <SportButton 
          title="Skiing" 
          onPress={() => handleSportSelection('Skiing')} 
          isSelected={sport === 'Skiing'} 
        />
      </View>

      <Text>Distance (km):</Text>
      <TextInput
        placeholder="Enter distance"
        value={distance}
        onChangeText={setDistance}
        onBlur={handleDistanceBlur}
        keyboardType="numeric"
      />

      <Text>Duration (Minutes):</Text>
      <TextInput
        placeholder="Minutes"
        value={minutes}
        onChangeText={setMinutes}
        onBlur={handleMinutesBlur}
        keyboardType="numeric"
      />

      <Text>Select Date: {selectedDate ? <Text>{selectedDate}</Text> : <Text>No date selected</Text>}</Text>
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => setShowCalendar(true)} 
      >
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>

      {showCalendar && (
        <Calendar
          onDayPress={handleDayPress}
          hideExtraDays
          markedDates={{ [date]: { selected: true, disableTouchEvent: true } }}
        />
      )}

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={handleAddWorkout} 
      >
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={handleShowWorkouts} 
      >
        <Text style={styles.buttonText}>Show Added Workouts</Text>
      </TouchableOpacity>
    </View>
  );
  
};

export default AddWorkout;
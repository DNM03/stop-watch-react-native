import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Time from "../Components/Time";
import CustomButton from "../Components/Button";
import LapList from "../Components/LapList";
import formatTime from 'minutes-seconds-milliseconds';

export default function HomeScreen() {
  const [timeChange, setTimeChange] = useState(0);
  const [isRun, setIsRun] = useState(false);
  
  const lapHandler = () => {
    let time = formatTime(timeChange)
    setLap([{ time: time }, ...lap]);
  };
  const resetHandler = () => {
    setTimeChange(0);
    setLap([]);
  };
  const startHandler = () => {
    if (isRun) {
      clearInterval(this.interval);
      setIsRun(false);

    } else {
      this.interval = setInterval(function () {
        setTimeChange(prevTime => prevTime + 100);
      }, 100);
      setIsRun(true);
    }
    
  };
  const [lap, setLap] = useState([]);
  useEffect(() => {
    return () => clearInterval(this.interval);
  }, []);
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <Time time={formatTime(timeChange)} />
      <View style={styles.buttonContainer}>
        <CustomButton content="Lap" pressHandler={lapHandler} />
        <CustomButton content="Reset" pressHandler={resetHandler} />
        <CustomButton content="Start/Stop" pressHandler={startHandler} />
      </View>
      <FlatList
        style={styles.flatList}
        data={lap}
        renderItem={({ item, index }) => (
          <LapList number={lap.length - index} time={item.time} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  flatList: {
    flex: 3,
    marginTop: 20,
    padding: 10,
  },
});

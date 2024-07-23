import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  //courseGoals: This variable holds the list of goals. It starts as an empty array and gets updated when new goals are added. 
  //setCourseGoals: This function is used to update the courseGoals state. When called, it changes the list of goals.
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  //This function is called when a new goal needs to be added. It takes the text of the new goal as an argument.
  function addGoalHandler(enteredGoalText) {
    //setCourseGoals is called with a function that takes the current list of goals (currentCourseGoals) and returns a new list with the new goal added.
    setCourseGoals(currentCourseGoals =>
      [...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
      ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(key) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.key !== key);
    });
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' color="#D5BDAF" onPress={startAddGoalHandler} />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler} />
      <View style={styles.containerList}>
        {/* This component displays a list of items. It is highly optimized for long lists and only renders items currently shown on screen. */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#EDEDE9'
  },

  containerList: {
    flex: 5,
    marginTop: 20,
  },
});

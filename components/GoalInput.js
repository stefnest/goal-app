import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState(''); //This state holds the text that the user types into the text input. It starts empty, It's updated every time the user changes the text in the TextInput component. 


    //This function is called whenever the text in the TextInput changes.
    // It updates enteredGoalText with whatever is currently in the TextInput
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); //reset the input field
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.containerInput}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter Your Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button color="#D5BDAF" title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.buttons}>
                        <Button color="#E3D5CA" title="Cancel" onPress={props.onCancel} />
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    containerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#EDEDE9',

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#D6CCC2',
        width: '100%',
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,

    },
    buttons: {
        width: '30%',
        marginHorizontal: 8,
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    }
});
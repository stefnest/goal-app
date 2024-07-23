import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (

        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#D5BDAF' }} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable >
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        
        borderRadius: 6,
        backgroundColor: '#E3D5CA',

    },
    goalText: {
        color: 'black',
        padding: 6,
    }
});
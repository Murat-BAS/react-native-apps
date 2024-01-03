import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./Card.style";

const Card = (props) => {
    return (
        <View>
            <View style={styles.body}>
                <View style={styles.text_area}>
                    <Text style = {styles.text_color}>{props.title}</Text>
                    <Text >{props.text}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={alerFunc}>
                    <Text style={styles.button_text}>I Like</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const alerFunc = (props) => {
    return(
        alert("Neyyy" + props.title)
    )
}

export default Card;
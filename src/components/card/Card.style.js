import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    continer: {
        backgroundColor: "#cdc9c9",
        marginTop: 45,
        justifyContent: 'space-evenly',
        alignItems: "center",
        flex: 1
      },
    body: {
      backgroundColor: "#fff",
      height: 170,
      width: 300,
      justifyContent: 'space-between',
      borderRadius: 10
    },
    text_area: {
      padding: 15,
    },
    text_color: {
      color: "#000",
      fontSize: 30,
      marginBottom: 10,
      fontWeight: "700"
    },
    button: {
      backgroundColor: "#5cacee",
      padding: 5,
      alignItems: "center",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    button_text: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600"
    }
      
})

export default Style;
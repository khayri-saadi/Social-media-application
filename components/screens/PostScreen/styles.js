import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    img:{
         width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    header:{
         padding: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    name:{
        fontWeight: "500",
    }
})

export default styles
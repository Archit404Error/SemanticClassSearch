import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const RoundButton = ({ icon, subtitle, pressFunc }: any) => {
    return (
        <TouchableOpacity onPress={pressFunc} style={styles.container}>
            {icon}
            <Text style={styles.subtitle}>{subtitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4d9bf0",
        flex: 1,
        flexDirection: "column",
        margin: 5,
        padding: 20,
        borderRadius: 5,
        aspectRatio: 1.25,
        maxHeight: 75,
        justifyContent: "center",
        alignItems: "center",
    },
    subtitle: {
        color: "white",
        fontSize: 15,
    },
})

export default RoundButton;
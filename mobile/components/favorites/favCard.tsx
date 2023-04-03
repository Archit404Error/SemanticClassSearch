import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RoundButton from "../buttons/roundButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const FavCard = ({ title, dept, number, desc }: CourseRec) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() =>
                router.push(
                    `/search/${dept}?num=${number}` +
                    `&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}`
                )
            }
            style={styles.cardContainer}
        >
            <Text style={styles.cardTitle}>{title} ({dept} {number})</Text>
            <Text numberOfLines={2}>{desc}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#ffffff",
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        padding: 15,
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 5,
    },
})

export default FavCard;
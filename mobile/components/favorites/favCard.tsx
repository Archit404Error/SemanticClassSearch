import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const FavCard = ({ title, dept, number, desc }: CourseRec) => {
    const router = useRouter();

    return (
        <View style={styles.cardContainer}>
            <View style={{ flexDirection: "column", flex: 9, }}>
                <Text style={styles.cardTitle}>{title} ({dept} {number})</Text>
                <Text numberOfLines={2}>{desc}</Text>
            </View>
            <TouchableOpacity
                onPress={() =>
                    router.push(
                        `/search/${dept}?num=${number}` +
                        `&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}`
                    )
                }
                style={{ flex: 1, justifyContent: 'center', }}
            >
                <Ionicons name="arrow-forward" size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#ffffff",
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        padding: 15,
        flexDirection: "row"
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 5,
    },
})

export default FavCard;
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RoundButton from "../buttons/roundButton";
import { useRouter } from "expo-router";

const CourseCard = ({ title, dept, number, similarity, desc }: CourseRec) => {
    const router = useRouter();

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title} ({dept} {number})</Text>
            <Text style={styles.aiHeader}>
                {(similarity * 100).toFixed(2)}% Query Similarity
            </Text>
            <Text style={styles.cardBody}>{desc}</Text>
            <View style={styles.horizontalView}>
                <RoundButton
                    icon={<Ionicons name="star" style={styles.subcardIcon} />}
                    subtitle="Favorite"
                />
                <RoundButton
                    icon={<Ionicons name="eye-outline" style={styles.subcardIcon} />}
                    subtitle="Info"
                    pressFunc={() => router.push(`/search/${dept}?num=${number}`)}
                />
                <RoundButton
                    icon={<Ionicons name="share-outline" style={styles.subcardIcon} />}
                    subtitle="Share"
                />
            </View>
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
    },
    horizontalView: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 5,
    },
    subcardIcon: {
        fontSize: 25,
        color: "white",
        marginBottom: 10,
    },
    aiHeader: {
        fontSize: 20,
        color: "#65a7fc",
        marginBottom: 5,
    },
    cardBody: {
        fontSize: 18,
    },
})

export default CourseCard;
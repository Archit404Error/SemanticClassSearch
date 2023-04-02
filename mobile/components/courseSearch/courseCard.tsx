import { StyleSheet, Text, View } from "react-native";

const CourseCard = ({ title, dept, number, similarity, desc }: CourseRec) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title} ({dept} {number})</Text>
            <Text style={styles.aiHeader}>
                {(similarity * 100).toFixed(2)}% Query Similarity
            </Text>
            <Text style={styles.cardBody}>{desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#ffffff",
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        padding: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    aiHeader: {
        fontSize: 18,
        color: "#65a7fc",
        marginBottom: 5,
    },
    cardBody: {
        fontSize: 15,
    },
})

export default CourseCard;
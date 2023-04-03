import { StyleSheet, Text, View, Share } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RoundButton from "../buttons/roundButton";
import { useRouter } from "expo-router";
import { useFavContext } from "../../context/favoriteContext";
import { useState } from "react";
import * as Linking from 'expo-linking';

const CourseCard = (props: CourseRec) => {
    const { title, dept, desc, number, similarity } = props;
    const router = useRouter();
    const { favorites, addFavorite, removeFavorite } = useFavContext() || { favorites: [], };
    const [isFavorited, setFavorited] = useState(
        favorites.filter(course => (`${course.dept} ${course.number}` === `${dept} ${number}`)).length != 0
    );

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title} ({dept} {number})</Text>
            <Text style={styles.aiHeader}>
                {similarity && (similarity * 100).toFixed(2)}% Query Similarity
            </Text>
            <Text style={styles.cardBody}>{desc}</Text>
            <View style={styles.horizontalView}>
                {!isFavorited &&
                    <RoundButton
                        icon={<Ionicons name="star" style={styles.subcardIcon} />}
                        subtitle="Favorite"
                        pressFunc={() => { setFavorited(true); addFavorite(props) }}
                    />
                }
                {isFavorited &&
                    <RoundButton
                        icon={<Ionicons name="star" style={styles.subcardIcon} />}
                        subtitle="Remove"
                        pressFunc={() => { setFavorited(false); removeFavorite(props) }}
                    />
                }
                <RoundButton
                    icon={<Ionicons name="eye-outline" style={styles.subcardIcon} />}
                    subtitle="Info"
                    pressFunc={() => router.push(
                        `/search/${dept}?num=${number}` +
                        `&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}`
                    )}
                />
                <RoundButton
                    icon={<Ionicons name="share-outline" style={styles.subcardIcon} />}
                    subtitle="Share"
                    pressFunc={() => Share.share({
                        url: Linking.createURL(`/search/${dept}?num=${number}` +
                            `&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}`)
                    })}
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
import { useState, useEffect } from "react";
import { useLocalSearchParams, useNavigation, useRouter, useSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Share } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RoundButton from "../../../components/buttons/roundButton";
import { ROSTER_API_4, SERVER_URL } from "../../../constants";
import { useFavContext } from "../../../context/favoriteContext";
import * as Linking from 'expo-linking';

interface CourseInfo {
    catalogComments?: string,
    catalogDistr?: string,
    catalogForbiddenOverlaps?: string,
    catalogOutcomes?: string[],
    catalogPrereqCoreq?: string,
    catalogWhenOffered?: string,
    description?: string,
    titleShort?: string,
}

const CourseDetails = () => {
    const { course, num, title, desc } = useLocalSearchParams();
    const courseData: CourseRec = {
        dept: course as string,
        number: num as string,
        title: title as string,
        desc: desc as string,
    }
    const { favorites, addFavorite, removeFavorite } = useFavContext();

    const [courseInfo, setCourseInfo] = useState<CourseInfo>()
    const [isFavorited, setFavorited] = useState(
        favorites.filter(cls => (`${cls.dept} ${cls.number}` === `${course} ${num}`)).length != 0
    );
    useEffect(() => {
        fetch(`${SERVER_URL}/course-info?course=${course}+${num}`)
            .then(res => res.json())
            .then(json => setCourseInfo(json))
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.subcontainer}>
                <Text style={styles.title}>{courseInfo?.titleShort} ({course} {num})</Text>
                <Text style={styles.subheader}>Offered: {courseInfo?.catalogWhenOffered}</Text>
                <Text style={styles.subheader}>Distribution: {courseInfo?.catalogDistr}</Text>
                <Text style={styles.subheader}>Forbidden Overlaps: {courseInfo?.catalogForbiddenOverlaps}</Text>
                <Text style={styles.subheader}>Description: {courseInfo?.description}</Text>
                <Text style={styles.subheader}>Outcomes:</Text>
                {
                    courseInfo?.catalogOutcomes?.map((outcome, idx) =>
                        <Text key={`outcome${idx}`} style={styles.subheader}>- {outcome}</Text>)
                }
                <Text style={styles.subheader}>Requirements: {courseInfo?.catalogPrereqCoreq}</Text>
                <View style={styles.horizontalView}>
                    {!isFavorited &&
                        <RoundButton
                            icon={<Ionicons name="star" style={styles.subcardIcon} />}
                            subtitle="Favorite"
                            pressFunc={() => { setFavorited(true); addFavorite(courseData) }}
                        />
                    }
                    {isFavorited &&
                        <RoundButton
                            icon={<Ionicons name="star" style={styles.subcardIcon} />}
                            subtitle="Remove"
                            pressFunc={() => { setFavorited(false); removeFavorite(courseData) }}
                        />
                    }
                    <RoundButton
                        icon={<Ionicons name="share-outline" style={styles.subcardIcon} />}
                        subtitle="Share"
                        pressFunc={() => {
                            Share.share({
                                url: Linking.createURL(`/search/${course}?num=${num}` +
                                    `&title=${encodeURIComponent(title as string)}&desc=${encodeURIComponent(desc as string)}`)
                            })
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    subcontainer: {
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subheader: {
        fontSize: 18,
        marginBottom: 10,
    },
    horizontalView: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    subcardIcon: {
        fontSize: 25,
        color: "white",
        marginBottom: 10,
    },
})

export default CourseDetails;
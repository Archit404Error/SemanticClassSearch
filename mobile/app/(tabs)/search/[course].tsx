import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { ROSTER_API_4, SERVER_URL } from "../../../constants";

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
    const [courseInfo, setCourseInfo] = useState<CourseInfo>()
    const { course, num } = useLocalSearchParams();

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
})

export default CourseDetails;
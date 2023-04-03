import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { ROSTER_API_4 } from "../../../constants";

interface Instructor {
    netid: string,
    lastname: string,
    firstname: string,
}

interface CourseInfo {
    instructors: Instructor[],
    titleShort: string,
    classNbr: number,
    acadGroup: string,
    locationDescr: string,
}

const Instructors = ({ instructors }: CourseInfo) => {
    return (
        <>
            {
                instructors.map(instructor =>
                    <Text>
                        {instructor.firstname} {instructor.lastname} ({instructor.netid})
                    </Text>
                )
            }
        </>
    )
}

const CourseDetails = () => {
    const [courseInfo, setCourseInfo] = useState<CourseInfo[]>()
    const { course, num } = useLocalSearchParams();

    useEffect(() => {
        fetch(`${ROSTER_API_4}/class-syllabi?rosterSlug=SP23&subject=${course}&catalogNbr=${num}`)
            .then(res => res.json())
            .then(json => setCourseInfo(json))
    }, [])

    return (
        <>
            <Text>{course} {num}</Text>
            {courseInfo?.map((lec, ind) => (
                <>
                    <Text>{lec.titleShort}</Text>
                    <Instructors {...lec} />
                </>
            ))

            }
        </>
    )
}

export default CourseDetails;
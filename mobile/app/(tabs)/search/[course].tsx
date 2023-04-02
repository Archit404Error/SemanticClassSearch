import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const CourseDetails = () => {
    const { course } = useLocalSearchParams();
    return (<Text>{course}</Text>)
}

export default CourseDetails;
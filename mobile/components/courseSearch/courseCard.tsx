import { Text, View } from "react-native";

const CourseCard = ({ title, dept, number, similarity, desc }: CourseRec) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>({dept} {number})</Text>
            <Text>{similarity}</Text>
            <Text>{desc}</Text>
        </View>
    )
}

export default CourseCard;
import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DoneWrapper, doneWrapperId } from "../../../components/utils/doneWrapper";
import { SERVER_URL } from "../../../constants";
import { Ionicons } from "@expo/vector-icons"
import CourseCard from "../../../components/courseSearch/courseCard";

const courseRecs = async (query?: string): Promise<CourseRec[]> => {
    if (!query) return [];
    query = encodeURIComponent(query);
    const res = await fetch(`${SERVER_URL}/search?query=${query}i&amt=20&dep=None&level=7000`);
    return res.json();
}

const Search = () => {
    const [query, setQuery] = useState<string>();
    const [recs, setRecs] = useState<CourseRec[]>();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ backgroundColor: "#4d9bf0" }}>
                    <View style={styles.searchParent}>
                        <TextInput
                            value={query}
                            onChangeText={setQuery}
                            onSubmitEditing={async () => setRecs(await courseRecs(query))}
                            placeholder="Search for classes..."
                            placeholderTextColor={"#cccccc"}
                            style={styles.searchBar}
                            inputAccessoryViewID={doneWrapperId}
                        />
                        <TouchableOpacity
                            style={styles.closeButtonParent}
                            onPress={() => setQuery("")}
                        >
                            <Ionicons name="close-circle-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    recs?.map((rec, index) => <CourseCard key={`rec${index}`} {...rec} />)
                }
            </ScrollView>
            <DoneWrapper />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    searchParent: {
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    closeButtonParent: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
    },
    searchBar: {
        padding: 10,
        fontSize: 20,
        color: "black",
        flex: 1,
    },
})

export default Search;
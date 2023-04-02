import { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SERVER_URL } from "../../../constants";
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
        <SafeAreaView>
            <ScrollView>
                <TextInput
                    onChangeText={setQuery}
                    onSubmitEditing={async () => setRecs(await courseRecs(query))}
                    placeholder="Testing"
                    style={{ fontSize: 20, backgroundColor: "red", color: "black" }}
                />
                {
                    recs?.map(rec => <CourseCard {...rec} />)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search;
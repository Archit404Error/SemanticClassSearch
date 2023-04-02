import { useState } from "react";
import { Platform, Text } from "react-native";
import { SearchBar } from "@rneui/base";

const Search = () => {
    const [query, setQuery] = useState<string>();

    return (
        <>
            <Text>Hi</Text>
            <SearchBar
                platform={Platform.OS == "ios" ? "ios" : "android"}
                value={query}
                onChangeText={setQuery}
            />
        </>
    )
}

export default Search;
import { useEffect, useState } from "react";
import { storeLocal, getStored } from "../../../utils/localStorage";
import { SafeAreaView, ScrollView } from "react-native";

const favorites = () => {
    const [favorites, setFavorites] = useState<CourseRec[]>();

    useEffect(() => {
        (async () => setFavorites(await getStored("cornellCourseFavs")))()
    }, [])


    return (
        <SafeAreaView>
            <ScrollView>
                {
                    favorites?.map((course, index) => (
                        <></>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default favorites;
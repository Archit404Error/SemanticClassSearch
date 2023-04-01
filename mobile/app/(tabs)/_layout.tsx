import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="search/index"
                options={{
                    title: "Search",
                    tabBarIcon: () => <TabIcon name="search" />
                }}
            />
        </Tabs>
    )
}

const TabIcon = ({ name }: any) => <Ionicons name={name} size={20} />

export default TabLayout;
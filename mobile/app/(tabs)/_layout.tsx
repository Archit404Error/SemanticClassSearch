import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: () => <TabIcon name="search" />,
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Favorites",
                    tabBarIcon: () => <TabIcon name="star" />,
                }}
            />
        </Tabs>
    )
}

const TabIcon = ({ name }: any) => <Ionicons name={name} size={20} />

export default TabLayout;
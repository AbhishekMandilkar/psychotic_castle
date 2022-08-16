import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Setting } from "iconsax-react-native";

import Colors from "../../constants/Colors";
import { SCREEN_HEIGHT } from "../../constants/Dimensions";
import { BOTTOM_TAB_ICON_SIZE } from "../../constants/Size";
import DashBoard from "../../screens/DashBoard";
import SettingsScreen from "../../screens/Settings";

const Tab = createBottomTabNavigator();

const globalTabOptions = {
  tabBarShowLabel: false,
  headerShown: false,
};

const globalTabIconProps = (focused) => {
  return {
    size: BOTTOM_TAB_ICON_SIZE,
    color: focused
      ? Colors.tab_bar_active_tint_color
      : Colors.tab_bar_inactive_tint_color,
    variant: focused ? "Bold" : "Linear",
  };
};

function TabNavigations() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "black",
          position: "absolute",
          bottom: 0,
          height: SCREEN_HEIGHT / 8,
          borderRadius: 20,
        },
        tabBarLabelStyle: { paddingBottom: 3 },
      })}
    >
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          ...globalTabOptions,
          tabBarIcon: ({ color, size, focused }) => (
            <Home {...globalTabIconProps(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          ...globalTabOptions,
          tabBarIcon: ({ color, size, focused }) => (
            <Setting {...globalTabIconProps(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigations;

import React from "react";
import { SafeAreaView, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopNavigation from "../Navigation/TopNavigation";
import ChatScreen from "../Screens/ChatScreen";
import StatusScreen from "../Screens/StatusScreen";
import CallScreen from "../Screens/CallScreen";
import LeadsScreen from "./LeadsScreen";
import Login from "./Login";
import Disbursement from "./Disbursement";
import Santion from "./Santion";

const Tab = createMaterialTopTabNavigator();

const tabScreens = [
  { name: "ChatScreen", component: ChatScreen, label: "Chat", icon: "chat" },
  { name: "CallScreen", component: CallScreen, label: "Calls", icon: "phone" },
  {
    name: "New Leads",
    component: LeadsScreen,
    label: "New Leads",
    icon: "badge-account",
  },
  {
    name: "Log In",
    component: Login,
    label: "Log In",
    icon: "clipboard-account",
  },
  {
    name: "StatusScreen",
    component: StatusScreen,
    label: "Status",
    icon: "account",
  },
  {
    name: "Santion",
    component: Santion,
    label: "Santion",
    icon: "account-check",
  },
  {
    name: "Disbursement",
    component: Disbursement,
    label: "Disbursement",
    icon: "clipboard-account",
  },
];

const renderTabScreens = () => {
  return tabScreens.map(({ name, component, label, icon }) => (
    <Tab.Screen
      key={name}
      name={name}
      component={component}
      options={{
        tabBarLabel: label,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name={icon} color={color} size={22} />
        ),
      }}
    />
  ));
};

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 mt-8">
      <TopNavigation />
      <View className="flex-1">
        <Tab.Navigator
          initialRouteName="ChatScreen"
          tabBarPosition="bottom"
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarActiveTintColor: "#722F37",
            tabBarInactiveTintColor: "grey",
            tabBarIndicatorStyle: { backgroundColor: "#722F37" },
            tabBarStyle: { backgroundColor: "#ebedef" },
            tabBarItemStyle: { width: 105 },
            tabBarLabelStyle: { fontSize: 10, padding: 0, margin: 0 },
          }}
        >
          {renderTabScreens()}
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

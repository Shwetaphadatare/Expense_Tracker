import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
        }}
      />

      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
        }}
      />

      <Tabs.Screen
        name="budget"
        options={{
          title: 'Budget',
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}

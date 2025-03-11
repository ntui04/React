import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen name="index" options={{title: 'HOME'}} />
      <Stack.Screen name="notes" options={{headerTitle: 'NOTES'}} />
      </Stack>
    </>
  );
};

export default RootLayout;
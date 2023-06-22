import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SplashScreen from "./screens/SplashScreen";

import RegisterScreen from "./screens/RegisterScreen";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import EducationScreen from "./screens/EducationScreen";
import ProfessionalExperienceScreen from "./screens/ProfessionalExperienceScreen";
import CoursesScreen from "./screens/CoursesScreen";
import PublicationsScreen from "./screens/PublicationsScreen";
import { View } from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Drawer.Navigator initialRouteName="Cadastro">
          <Drawer.Screen
            name="Cadastro"
            component={RegisterScreen}
            options={{
              drawerIcon: ({ tintColor }) => <Ionicons name="pencil" size={18} color={tintColor} />,
            }}
          />
          <Drawer.Screen
            name="Informações Pessoais"
            component={PersonalInfoScreen}
            options={{
              drawerIcon: ({ tintColor }) => <Ionicons name="person" size={18} color={tintColor} />,
            }}
          />
          <Drawer.Screen
            name="Formação"
            component={EducationScreen}
            options={{
              drawerIcon: ({ tintColor }) => <Ionicons name="school" size={18} color={tintColor} />,
            }}
          />
          <Drawer.Screen
            name="Experiência Profissional"
            component={ProfessionalExperienceScreen}
            options={{
              drawerIcon: ({ tintColor }) => <Ionicons name="desktop" size={18} color={tintColor} />,
            }}
          />
          <Drawer.Screen
            name="Cursos"
            component={CoursesScreen}
            options={{
              drawerIcon: ({ tintColor }) => <Ionicons name="book" size={18} color={tintColor} />,
            }}
          />
          <Drawer.Screen
            name="Publicações"
            component={PublicationsScreen}
            options={{
              drawerIcon: ({ tintColor }) => <Ionicons name="receipt" size={18} color={tintColor} />,
            }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

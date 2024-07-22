import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/layouts/navigations/AppNavigation";

export default function App(){
  return(
   <NavigationContainer>
    <AppNavigation/>
   </NavigationContainer>
  )
}

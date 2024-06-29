import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
          tabBarStyle: {backgroundColor: 'black',},
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', color: 'white',fontFamily: 'Times New Roman'},
       
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={'white'} />
          ),
        }}
      />
     <Tabs.Screen
        name="PrediccionGenero"
        options={{
          title: 'Genero',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={'white'} />
          ),
        }}
      />
        
       
      <Tabs.Screen
        name="PrediccionEdad"
        options={{
          title: 'Edad',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="Universidades"
        options={{
          title: 'Univ',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home-sharp' : 'home'} color={'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="Clima"
        options={{
          title: 'Clima',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'water' : 'water-outline'} color={'white'} />
          ),
        }}
      />
     
     <Tabs.Screen
          name="SobreMi"
          options={{
            title: 'SobreMi',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={'white'} />
            ),
          }}
        />
        <Tabs.Screen
          name="WordPrees"
          options={{
            title: 'WordPrees',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'information-sharp' : 'information-circle-sharp'} color={'white'} />
            ),
          }}
        />
    </Tabs>
  );
}
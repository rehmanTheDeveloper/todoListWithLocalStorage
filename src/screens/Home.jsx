import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../constants';
import {HomeHeader as Header, PriorityTasks, TodayTasks} from '../Layouts';
import {Button, Text} from '../ui-components';
import {PlusCircleIcon} from 'react-native-heroicons/solid';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[s`flex-1 items-center px-3.5 relative`, styles.window]}>
      <Header />
      <Tasks />
      <Button
        className={
          'w-full flex-row items-center justify-center absolute bottom-0 py-3 my-2'
        } onPress={() => navigation.navigate('createTask')}>
        <PlusCircleIcon size={30} color={theme.colors.dark[50]} />
        <Text className="ml-1" weight="SemiBold">
          Add Task
        </Text>
      </Button>
    </SafeAreaView>
  );
};

const Tasks = () => {
  return (
    <ScrollView style={s`w-full flex-1`} showsVerticalScrollIndicator={false}>
      <PriorityTasks />
      <TodayTasks />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  window: {
    backgroundColor: theme.colors.dark[950],
  },
});

export default Home;

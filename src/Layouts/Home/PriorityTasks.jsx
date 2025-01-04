import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {s} from 'react-native-wind';
import {Button, Text} from '../../ui-components';
import {NoData} from '../../assets';
import {PriorityTaskCard} from '../../components';
import { useNavigation } from '@react-navigation/native';

const PriorityTasks = () => {
  const navigation = useNavigation();
  const data = [
    {
      title: 'Create an Interactive Website.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque temporibus veniam at assumenda consequatur rem, odit numquam quo soluta in reprehenderit saepe architecto nobis? Perspiciatis, consequuntur quibusdam.',
      priority: 'high',
      status: 1,
      date: '2024-03-12',
      time: '10:11 am',
    },
    {
      title: 'Create an Interactive Website.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque temporibus veniam at assumenda consequatur rem, odit numquam quo soluta in reprehenderit saepe architecto nobis? Perspiciatis, consequuntur quibusdam.',
      priority: 'high',
      status: 1,
      date: '2024-03-12',
      time: '10:11 am',
    },
  ];

  return (
    <View style={s`w-full items-center mb-3`}>
      <View style={s`w-full flex-row items-center justify-between mb-2`}>
        <Text size={20} weight="SemiBold">
          Priority Tasks
        </Text>
        <Button className={'py-2'} onPress={() => navigation.navigate('tasks')}>
          <Text size={12} weight="Medium">
            View All
          </Text>
        </Button>
      </View>
      {data.length > 0 ? (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.map((task, index) => (
            <PriorityTaskCard
              title={task.title}
              description={task.description}
              priority={task.priority}
              status={task.status}
              date={task.date}
              time={task.time}
              key={`${index}-${task.date}-${task.time}`}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={s`w-full flex-row items-center justify-center h-32`}>
          {/* <ActivityIndicator size={'large'} color={theme.colors.primary[400]} /> */}
          <Image source={NoData} style={styles.PriorityTasksNoDataImage} />
          <Text className="ml-1" size={16}>
            No Priority Task Found!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  PriorityTasksNoDataImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});

export default PriorityTasks;

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {s} from 'react-native-wind';
import {Text} from '../../ui-components';
import {NoData} from '../../assets';
import {TaskCard} from '../../components';
import {theme} from '../../constants';
import {useTask} from '../../hooks';
import { useRefresh } from '../../contexts/RefreshContext';

const TodayTasks = () => {
    const {Refresh} = useRefresh();
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const {fetchTodayTasks} = useTask();

  useEffect(() => {
    fetchTodayTasks(setData, setLoading);
  }, [Refresh]);

  return (
    <View style={s`w-full items-center mb-3 px-3.5`}>
      <View style={s`w-full flex-row items-center justify-between mb-2`}>
        <Text size={20} weight="SemiBold">
          Today Tasks
        </Text>
      </View>
      {!Loading ? (
        Data?.length > 0 ? (
          Data?.map(task => (
            <TaskCard
                id={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              status={task.status}
              date={task.date}
              key={task.id}
            />
          ))
        ) : (
          <View style={s`w-full items-center justify-center h-72`}>
            <Image source={NoData} style={styles.TodayTasksNoDataImage} />
            <Text size={16}>No Task Added, Yet!</Text>
          </View>
        )
      ) : (
        <ActivityIndicator size={'large'} color={theme.colors.dark[50]} />
      )}
      <View style={s`py-7`} />
    </View>
  );
};

const styles = StyleSheet.create({
  TodayTasksNoDataImage: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
});

export default TodayTasks;

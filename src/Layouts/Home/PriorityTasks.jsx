import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import {s} from 'react-native-wind';
import {Button, Text} from '../../ui-components';
import {NoData} from '../../assets';
import {PriorityTaskCard} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useTask } from '../../hooks';
import { theme } from '../../constants';
import { useRefresh } from '../../contexts/RefreshContext';

const PriorityTasks = () => {
  const navigation = useNavigation();
  const {Refresh} = useRefresh();
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  const { fetchHighPriorityTasks } = useTask();

  useEffect(() => {
    fetchHighPriorityTasks(setData, setLoading);
  }, [Refresh]);

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
      {!Loading ? (
        Data.length > 0 ? (
          <FlatList horizontal={true} contentContainerStyle={{
            paddingLeft: 7
          }} showsHorizontalScrollIndicator={false} data={Data} renderItem={({item, index}) => (
            <PriorityTaskCard
              id={item.id}
              title={item.title}
              description={item.description}
              priority={item.priority}
              status={item.status}
              date={item.date}
              key={`${index}-${item.date}-${item.time}`}
            />
          )} />
        ) : (
          <View style={s`w-full flex-row items-center justify-center h-32`}>
            <Image source={NoData} style={styles.PriorityTasksNoDataImage} />
            <Text className="ml-1" size={16}>
              No Priority Task Available!
            </Text>
          </View>
        )
      ) : (
        <ActivityIndicator size={'large'} color={theme.colors.primary[400]} />
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

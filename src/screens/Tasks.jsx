import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { theme } from '../constants';
import { s } from 'react-native-wind';
import { TasksHeader } from '../Layouts';
import { TaskCard } from '../components';
import { NoData } from '../assets';
import { Text } from '../ui-components';
import { useTask } from '../hooks';
import { useRefresh } from '../contexts/RefreshContext';

const Tasks = () => {
    return (
        <SafeAreaView style={[s`flex-1 items-center`, styles.window]}>
            <TasksHeader />
            <TasksSection />
        </SafeAreaView>
    );
}

const TasksSection = () => {
    const {Refresh} = useRefresh();
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const { fetchTasks } = useTask();

    useEffect(() => {
        fetchTasks(setData, setLoading);
    }, [Refresh]);

    return (
        <ScrollView style={s`flex-1 px-3 w-full`} showsVerticalScrollIndicator={false}>
            {!Loading ? Data?.length > 0 ? 
                Data.map((task) => <TaskCard
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    priority={task.priority}
                    status={task.status}
                    key={task.id}
                />)
            : <View style={s`w-full items-center justify-center h-72`}>
                <Image source={NoData} style={styles.TodayTasksNoDataImage} />
                <Text size={16}>No Task Added, Yet!</Text>
            </View> : (
                <ActivityIndicator size={'large'} color={theme.colors.dark[50]} />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    window: {
        backgroundColor: theme.colors.dark[950]
    },
    TodayTasksNoDataImage: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
})

export default Tasks
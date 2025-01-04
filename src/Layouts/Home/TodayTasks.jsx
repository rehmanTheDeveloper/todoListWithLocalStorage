import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { s } from 'react-native-wind';
import { Text } from '../../ui-components';
import { NoData } from '../../assets';
import { TaskCard } from '../../components';

const TodayTasks = () => {
    const data = [{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'low',
        status: 1,
        date: '2024-03-12',
        time: '10:11 am'
    },{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'normal',
        status: 0,
        date: '2024-03-12',
        time: '10:11 am'
    },{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'high',
        status: 1,
        date: '2024-03-12',
        time: '10:11 am'
    }]

    return (
        <View style={s`w-full items-center mb-3`}>
            <View style={s`w-full flex-row items-center justify-between mb-2`}>
                <Text size={20} weight='SemiBold'>Today Tasks</Text>
            </View>
            {data.length > 0 ? 
                data.map((task, index) => 
                    <TaskCard
                        title={task.title}
                        description={task.description}
                        priority={task.priority}
                        status={task.status}
                        date={task.date}
                        key={`${index}-${task.date,task.time}`}
                    />
                )
            : <View style={s`w-full items-center justify-center h-72`}>
                {/* <ActivityIndicator size={'large'} color={theme.colors.primary[400]} /> */}
                <Image source={NoData} style={styles.TodayTasksNoDataImage} />
                <Text size={16}>No Task Added, Yet!</Text>
            </View>}
            <View style={s`py-7`} />
        </View>
    )
}

const styles = StyleSheet.create({
    TodayTasksNoDataImage: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
})

export default TodayTasks
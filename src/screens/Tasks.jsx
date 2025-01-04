import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { theme } from '../constants';
import { s } from 'react-native-wind';
import { TasksHeader } from '../Layouts';
import { TaskCard } from '../components';

const Tasks = () => {
    return (
        <SafeAreaView style={[s`flex-1 items-center`, styles.window]}>
            <TasksHeader />
            <TasksSection />
        </SafeAreaView>
    );
}

const TasksSection = () => {
    const data = [{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'high',
        status: 1,
        date: '2024-03-12'
    },{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'low',
        status: 0,
        date: '2024-03-12'
    },{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'low',
        status: 1,
        date: '2024-03-12'
    },{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'normal',
        status: 0,
        date: '2024-03-12'
    },{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'normal',
        status: 1,
        date: '2024-03-12'
    },{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'high',
        status: 0,
        date: '2024-03-12'
    },{
        title: 'Create an Interactive Website.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel amet rerum! Repudiandae quae totam quibusdam mollitia vero repellat ut possimus cumque.',
        priority: 'normal',
        status: 1,
        date: '2024-03-12'
    }]

    return (
        <ScrollView style={s`flex-1 px-3 w-full`} showsVerticalScrollIndicator={false}>
            {data.map((task) => <TaskCard
                title={task.title}
                description={task.description}
                date={task.date}
                priority={task.priority}
                status={task.status}
            />)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    window: {
        backgroundColor: theme.colors.dark[950]
    }
})

export default Tasks
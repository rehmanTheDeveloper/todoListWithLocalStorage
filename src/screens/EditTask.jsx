import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Badge, Button, Input, Text} from '../ui-components';
import {s} from 'react-native-wind';
import {constants, theme} from '../constants';
import {EditTaskHeader} from '../Layouts';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const EditTask = ({ navigation, route }) => {
    const {id} = route.params;
  return (
    <SafeAreaView style={[s`flex-1 items-center`, styles.window]}>
      <EditTaskHeader />
      <ScrollView
        style={s`flex-1 w-full px-3`}
        showsVerticalScrollIndicator={false}>
        <TaskForm />
      </ScrollView>
    </SafeAreaView>
  );
};

const TaskForm = () => {
  const [Task, setTask] = useState({
    title: '',
    description: '',
    priority: 'low',
    date: dayjs(),
    priorities: constants.priorities,
  });

  const _handleSubmit = () => {
    console.log("Handle Modification of Task!");
  }

  return (
    <>
    <View style={s`w-full`}>
        <Input
          placeholder="Task Title"
          setValue={val => {
            setTask(prev => ({
              ...prev,
              title: val,
            }));
          }}
          value={Task.title}
          label="Title"
        />
        <Input
          placeholder="Task Details"
          setValue={val => {
            setTask(prev => ({
              ...prev,
              description: val,
            }));
          }}
          value={Task.title}
          label="Details"
        />
        <View style={s`w-full bg-gray-50 rounded-xl my-3 pt-3`}>
          <DateTimePicker
            date={Task.date}
            mode="single"
            weekDaysTextStyle={{
              fontFamily: 'OpenSans-SemiBold',
            }}
            headerTextStyle={{
              fontFamily: 'OpenSans-Regular',
            }}
            calendarTextStyle={{
              fontFamily: 'OpenSans-Regular',
            }}
            selectedTextStyle={{
              fontFamily: 'OpenSans-SemiBold',
            }}
            selectedItemColor={theme.colors.primary[600]}
            onChange={params =>
              setTask(prev => ({
                ...prev,
                date: params.date,
              }))
            }
          />
        </View>
        <View style={[s`w-full flex-row flex-wrap items-center justify-around mb-5`, {rowGap: 7}]}>
          <Text weight="SemiBold" className="w-full">
            Select Priority
          </Text>
          {Task.priorities.map((priority, index) => {
            if (Task.priority === priority.value) {
              return (
                <Badge key={index} className={priority.color}>
                  {priority.text}
                </Badge>
              );
            } else {
              return (
                <TouchableOpacity
                  key={index}
                  style={s`py-2 px-3`}
                  onPress={() =>
                    setTask(prev => ({
                      ...prev,
                      priority: priority.value,
                    }))
                  }>
                  <Text size={13}>{priority.text}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
    </View>
    <Button className="w-full" onPress={_handleSubmit}>
        <Text size={16} weight='SemiBold' className='text-center'>Create Task</Text>
    </Button>
    </>
  );
};

const styles = StyleSheet.create({
  window: {
    backgroundColor: theme.colors.dark[950],
  },
});

export default EditTask;

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Alert, Badge, Button, Input, Text} from '../ui-components';
import {s} from 'react-native-wind';
import {constants, theme} from '../constants';
import {EditTaskHeader} from '../Layouts';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useTask } from '../hooks';

const EditTask = ({ navigation, route }) => {
    const {id} = route.params;
  return (
    <SafeAreaView style={[s`flex-1 items-center`, styles.window]}>
      <EditTaskHeader />
      <ScrollView
        style={s`flex-1 w-full px-3`}
        showsVerticalScrollIndicator={false}>
        <TaskForm id={id} />
      </ScrollView>
    </SafeAreaView>
  );
};

const TaskForm = ({id}) => {
  const [Task, setTask] = useState({
    isInvalidTitle: false,
    priorities: constants.priorities,
  });
  const {fetchTask, modifyTask} = useTask();
  const [Loading, setLoading] = useState(false);
  const [AlertState, setAlertState] = useState({
      text: null,
      backgroundColor: theme.colors.red[950],
      borderColor: theme.colors.red[400],
    });

    const _handle_modify = async () => {
        setLoading(true);
        const updated = await modifyTask(Task, setTask, setLoading)
        if (updated) {
          setAlertState(prev => ({
            text: "Task Updated Successfully!",
            borderColor: theme.colors.green[400],
            backgroundColor: theme.colors.green[950]
          }))
        } else {
          setAlertState(prev => ({
            text: "Title Field is empty!",
            borderColor: theme.colors.red[400],
            backgroundColor: theme.colors.red[950]
          }))
        }
        setLoading(false);
      };

  useEffect(() => {
    fetchTask(id, setTask);
  }, [])


    useEffect(() => {
      if (AlertState.text !== null) {
        const timeout = setTimeout(() => {
          setAlertState(prev => ({
            ...prev,
            text: null,
          }));
        }, 5000);
  
        return () => clearTimeout(timeout);
      }
    }, [AlertState.text]);

  return (
    <>
    {AlertState.text ? (<Alert
        text={AlertState.text}
        backgroundColor={AlertState.backgroundColor}
        borderColor={AlertState.borderColor}
      />) : null}
    <View style={s`w-full`}>
        <Input
          placeholder="Task Title"
          setValue={val => {
            setTask(prev => ({
              ...prev,
              title: val,
            }));
          }}
          value={Task?.title}
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
          value={Task?.description}
          label="Details"
        />
        <View style={s`w-full bg-gray-50 rounded-xl my-3 pt-3`}>
          <DateTimePicker
            date={Task?.date}
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
          {Task?.priorities.map((priority, index) => {
            if (Task?.priority === priority.value) {
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
    {!Loading ? (
      <Button className="w-full" onPress={_handle_modify}>
        <Text size={16} weight="SemiBold" className="text-center">
          Update Task
        </Text>
      </Button>
    ) : (
      <ActivityIndicator size={'large'} color={theme.colors.dark[50]} />
    )}
    <View style={s`pb-5`} />
    </>
  );
};

const styles = StyleSheet.create({
  window: {
    backgroundColor: theme.colors.dark[950],
  },
});

export default EditTask;

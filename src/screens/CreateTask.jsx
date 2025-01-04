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
import {Alert, Badge, Button, Input, Modal, Text} from '../ui-components';
import {s} from 'react-native-wind';
import {constants, theme} from '../constants';
import {CreateTaskHeader} from '../Layouts';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import {useTask} from '../hooks';
import moment from 'moment';

const CreateTask = () => {
  return (
    <SafeAreaView style={[s`flex-1 items-center`, styles.window]}>
      <CreateTaskHeader />
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
    isInvalidTitle: false,
    description: '',
    priority: 'low',
    date: dayjs(),
    priorities: constants.priorities,
  });
  const [Loading, setLoading] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);
  const [AlertState, setAlertState] = useState({
    text: null,
    backgroundColor: theme.colors.red[950],
    borderColor: theme.colors.red[400],
  });

  const _handle_submit = async () => {
    setLoading(true);
    const inserted = await addTask(Task, setTask);
    if (inserted) {
      setAlertState(prev => ({
        text: "Task Created Successfully!",
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
  const {addTask} = useTask();

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
          value={Task.title}
          isInvalid={Task.isInvalidTitle}
          label="Title"
          required={true}
        />
        <Input
          placeholder="Task Details"
          setValue={val => {
            setTask(prev => ({
              ...prev,
              description: val,
            }));
          }}
          value={Task.description}
          label="Details"
        />
        <View
          style={[
            s`w-full flex-row flex-wrap items-center mb-5`,
            {rowGap: 7},
          ]}>
          <Text weight="SemiBold" className="w-full">
            Select Datetime
          </Text>
          <TouchableOpacity style={s`rounded-lg`} onPress={() => setModalVisible(prev => !prev)}>
            <Text className='underline' color={theme.colors.primary[400]} size={16} weight='Medium'>{moment(Task.date).format("hh:mm a DD MMM. YYYY")}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            s`w-full flex-row flex-wrap items-center justify-around mb-5`,
            {rowGap: 7},
          ]}>
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
      {!Loading ? (
        <Button className="w-full" onPress={_handle_submit}>
          <Text size={16} weight="SemiBold" className="text-center">
            Create Task
          </Text>
        </Button>
      ) : (
        <ActivityIndicator size={'large'} color={theme.colors.dark[50]} />
      )}
      <View style={s`pb-5`} />
      <Modal modalVisible={ModalVisible} setModalVisible={setModalVisible} onSuccess={() => {setModalVisible(prev => !prev)}}>
      <Text weight="SemiBold" className="w-full" color={theme.colors.dark[950]}>
        Select Datetime
      </Text>
      <View style={s`w-full rounded-xl my-3 pt-3`}>
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
            timePicker={true}
            selectedItemColor={theme.colors.primary[600]}
            onChange={params =>
              setTask(prev => ({
                ...prev,
                date: params.date,
              }))
            }
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  window: {
    backgroundColor: theme.colors.dark[950],
  },
});

export default CreateTask;

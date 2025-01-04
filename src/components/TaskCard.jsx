import React, { useEffect, useState } from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-wind';
import {constants, theme} from '../constants';
import {Badge, Text} from '../ui-components';
import {
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  CheckCircleIcon as CheckCircleIconSolid,
  TrashIcon,
} from 'react-native-heroicons/solid';
import {CheckCircleIcon as CheckCircleIconOutline} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import { useTask } from '../hooks';

const TaskCard = ({title, description, date, status, priority, id}) => {
  const navigation = useNavigation();
  const [Status, setStatus] = useState(status);
  const filteredPriority = constants.priorities.filter(
    constantPriority => priority === constantPriority.value
  );
  const {removeTask, toggleStatusTask} = useTask();

  return (
    <View style={[s`w-full py-2`]}>
      <View
        style={[
          s`w-full rounded-xl p-3 relative`,
          {
            backgroundColor: theme.colors.dark[900],
            gap: 7,
          },
        ]}>
        <View style={s`w-full flex-row justify-between items-center`}>
          <View ew style={[s`flex-row items-center`, {gap: 7}]}>
            <CalendarDaysIcon size={24} color={theme.colors.dark[50]} />
            <Text size={14} color={theme.colors.dark[200]}>
              {date ? moment(date).format('dddd, DD MMM. YYYY') : 'No Date.'}
              {"\n"}
              {date ? moment(date).format('hh:mm a') : 'No Time.'}
            </Text>
          </View>
          {Status ? (
            <View style={[s`flex-row items-center`, {gap: 7}]}>
              <TouchableOpacity onPress={() => Alert.alert(`Delete "${title}"`, `Are you Sure to Delete Task "${title}" ?`, [{
                  text: "Cancel",
                  onPress: () => {},
                },{
                  text: "Delete",
                  onPress: () => removeTask(id)
                }])}>
                <TrashIcon size={30} color={theme.colors.red[500]} />
              </TouchableOpacity>
              <CheckCircleIconSolid
                size={40}
                color={theme.colors.green[500]}
                style={s``}
              />
            </View>
          ) : (
            <Badge className={`${filteredPriority[0]?.color} w-4/12`}>
              {filteredPriority[0]?.text}
            </Badge>
          )}
        </View>
        <Text size={18} weight="SemiBold" className="w-full">
          {title}
        </Text>
        <Text size={14} weight="Light" className="w-full">
          {description}
        </Text>
        <View style={s`w-full flex-row justify-evenly items-center`}>
          {!Status && (
            <>
              <TouchableOpacity onPress={() => toggleStatusTask(id, setStatus)}>
                <CheckCircleIconOutline
                  size={30}
                  color={theme.colors.primary[50]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('editTask', {id: id})}>
                <AdjustmentsHorizontalIcon
                  size={30}
                  color={theme.colors.yellow[500]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Alert.alert(`Delete "${title}"`, `Are you Sure to Delete Task ?`, [{
                text: "Cancel",
                onPress: () => {},
              },{
                text: "Delete",
                onPress: () => removeTask(id)
              }])}>
                <TrashIcon size={30} color={theme.colors.red[500]} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

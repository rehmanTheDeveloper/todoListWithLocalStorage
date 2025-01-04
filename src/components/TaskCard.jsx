import React from 'react';
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

const TaskCard = ({title, description, date, status, priority, id}) => {
  const navigation = useNavigation();
  const filteredPriority = constants.priorities.filter(
    constantPriority => priority === constantPriority.value,
  );
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
            </Text>
          </View>
          {status ? (
            <CheckCircleIconSolid
              size={40}
              color={theme.colors.green[500]}
              style={s`absolute top-0 right-0`}
            />
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
          {!status && (
            <>
              <TouchableOpacity onPress={() => {}}>
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
              <TouchableOpacity onPress={() => Alert.alert('Delete #999', "Are you Sure to Delete Task ?", [{
                text: "Cancel",
                onPress: () => {},
              },{
                text: "Delete",
                onPress: () => {}
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

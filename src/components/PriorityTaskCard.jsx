import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../constants';
import {
  CalendarDaysIcon,
  CheckCircleIcon as CheckCircleIconSolid,
} from 'react-native-heroicons/solid';
import {CheckCircleIcon as CheckCircleIconOutline} from 'react-native-heroicons/outline';
import {Badge, Text} from '../ui-components';
import moment from 'moment';
import { useTask } from '../hooks';

const {width} = Dimensions.get('window');

const PriorityTaskCard = ({title, description, priority, date, id, status}) => {
  const [Status, setStatus] = useState(status);
  const {toggleStatusTask} = useTask();
  return (
    <View style={[s`py-2 mr-2`, styles.cardWrapper]}>
      <View style={[s`w-full rounded-xl p-3`, styles.card]}>
        <View style={s`w-full flex-row justify-between`}>
          <View style={[s`flex-row items-center`, {gap: 7}]}>
            <CalendarDaysIcon size={24} color={theme.colors.dark[50]} />
            <Text size={14} color={theme.colors.dark[200]}>
              {date ? moment(date).format("ddd, DD MMM. YYYY") : 'No Date.'}
              {"\n"}
              {date ? moment(date).format('hh:mm a') : 'No Time.'}
            </Text>
          </View>
          <Badge className="bg-red-500 w-4/12">High Priority</Badge>
        </View>
        <View style={s`w-full flex-row items-center justify-between`}>
            <View style={s`w-10/12 items-center`}>
            <Text size={18} weight="SemiBold" className="w-full">
                {title}
            </Text>
            <Text size={14} weight="Light" className="w-full">
                {description}
            </Text>
            </View>
            <View style={s`w-2/12 items-center`}>
            {Status ? (
                <CheckCircleIconSolid size={30} color={theme.colors.green[500]} />
            ) : (
                <TouchableOpacity onPress={() => toggleStatusTask(id, setStatus)}>
                <CheckCircleIconOutline
                    size={30}
                    color={theme.colors.primary[50]}
                />
                </TouchableOpacity>
            )}
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: width * 0.9,
  },
  card: {
    backgroundColor: theme.colors.dark[900],
    gap: 7,
  },
});

export default PriorityTaskCard;

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableHighlight,
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
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const PriorityTaskCard = ({title, description, priority, date, id, status}) => {
  const navigation = useNavigation();
  return (
    <View style={[s`py-2 mr-3`, styles.cardWrapper]}>
      <View style={[s`w-full rounded-xl p-3`, styles.card]}>
        <View style={s`w-full flex-row justify-between`}>
          <View style={[s`flex-row items-center`, {gap: 7}]}>
            <CalendarDaysIcon size={24} color={theme.colors.dark[50]} />
            <Text size={14} color={theme.colors.dark[200]}>
              Tuesday, 23 Dec. 2024
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
            {status ? (
                <CheckCircleIconSolid size={30} color={theme.colors.green[500]} />
            ) : (
                <TouchableOpacity>
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
    width: width * 0.8,
  },
  card: {
    backgroundColor: theme.colors.dark[900],
    gap: 7,
  },
});

export default PriorityTaskCard;

import React from 'react';
import uuid from 'react-native-uuid';
import {
  deleteTask,
  getTask,
  getTasks,
  insertTask,
  updateTask,
  deleteAllTasks,
  updateStatusOfTask,
} from '../asyncHelpers/taskHelper';
import dayjs from 'dayjs';
import {constants} from '../constants';
import moment from 'moment';
import {useRefresh} from '../contexts/RefreshContext';

const useTask = () => {
  const {setRefresh} = useRefresh();
  const today = moment().format('YYYY-MM-DD');
  const addTask = async (data, setData) => {
    try {
      setData(prev => ({
        ...prev,
        isInvalidTitle: false,
      }));
      const unqiueId = uniqueIdGenerator();

      if (data.title == '') {
        setData(prev => ({
          ...prev,
          isInvalidTitle: true,
        }));
        return;
      }

      const submission = await insertTask({
        id: unqiueId,
        date: data.date,
        title: data.title,
        description: data.description,
        priority: data.priority,
        status: 0,
      });
      if (submission) {
        setData({
          title: '',
          isInvalidTitle: false,
          description: '',
          priority: 'low',
          date: dayjs(),
          priorities: constants.priorities,
        });
      }
      setRefresh(prev => !prev);
      return submission;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  const fetchTasks = async (setData, setLoading) => {
    setLoading(true);
    try {
      // Condition:
      const tasks = await getTasks();
      // console.log(tasks);
      if (tasks && tasks?.length > 0) {
        const updatedTasks = tasks.sort((a, b) => {
          const priorityObject = {high: 1, normal: 2, low: 3};
          const priorityA = priorityObject[a.priority] || 3;
          const priorityB = priorityObject[b.priority] || 3;
          if (priorityA !== priorityB) {
            return priorityA - priorityB;
          }
        });
        const datetimesortedTasks = updatedTasks.sort((a, b) => {
          const timeA = Date(a.date);
          const timeB = Date(b.date);
          return timeA - timeB;
        });
        setData(datetimesortedTasks);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  const fetchTodayTasks = async (setData, setLoading) => {
    setLoading(true);
    try {
      const tasks = await getTasks();

      if (tasks && tasks?.length > 0) {
        const updatedTasks = tasks.filter((task, index) => {
          const taskDate = moment(task.date).format('YYYY-MM-DD');
          return taskDate === today;
        });

        setData(updatedTasks);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  const fetchHighPriorityTasks = async (setData, setLoading) => {
    setLoading(true);
    try {
      const tasks = await getTasks();
      if (tasks && tasks?.length > 0) {
        const filteredTasks = tasks.filter(task => {
          const taskDate = moment(task.date).format('YYYY-MM-DD');
          return task.priority === 'high' && taskDate === today;
        });
        setData(filteredTasks);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  const removeTask = async (id, setLoading) => {
    try {
      await deleteTask(id);
      setRefresh(prev => !prev);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchTask = async (id, setData) => {
    try {
      const task = await getTask(id);
      setData(prev => ({
        ...prev,
        title: task[0].title,
        description: task[0].description,
        priority: task[0].priority,
        date: task[0].date,
        id: task[0].id,
        status: task[0].status,
      }));
    } catch (error) {
      console.error(error.message);
    }
  };

  const modifyTask = async (data, setData, setLoading) => {
    setLoading(true);
    try {
      setData(prev => ({
        ...prev,
        isInvalidTitle: false,
      }));

      if (data.title == '') {
        setData(prev => ({
          ...prev,
          isInvalidTitle: true,
        }));
        return;
      }

      await updateTask(data.id, {
        date: data.date,
        description: data.description,
        id: data.id,
        priority: data.priority,
        status: data.status,
        title: data.title
      });
      setRefresh(prev => !prev);
      setLoading(false);
      return true;
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      return false;
    }
  };

  const removeAllTasks = async () => {
    try {
      await deleteAllTasks();
      setRefresh(prev => !prev);
    } catch (error) {
      console.error(error.message);
    }
  };

  const toggleStatusTask = async (id, setStatus) => {
    try {
      await updateStatusOfTask(id);
    } catch (error) {
      console.error(error.message);
    }
    setStatus(prev => !prev);
    setRefresh(prev => !prev);
  }

  const uniqueIdGenerator = () => {
    return uuid.v4();
  };

  return {
    addTask,
    fetchTasks,
    removeTask,
    fetchTodayTasks,
    fetchHighPriorityTasks,
    fetchTask,
    modifyTask,
    removeAllTasks,
    toggleStatusTask
  };
};

export default useTask;

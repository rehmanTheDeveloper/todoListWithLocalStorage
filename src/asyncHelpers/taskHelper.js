import AsyncStorage from "@react-native-async-storage/async-storage";

export const insertTask = async (data) => {
    try {
        const allTasks = await AsyncStorage.getItem('tasks');
        let tasks = allTasks ? JSON.parse(allTasks) : [];

        if (!Array.isArray(tasks)) {
            tasks = [];
        }
        const updatedTasks = [...tasks, data]

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return true;
    } catch (error) {
        console.log(error);
    }
}

export const updateStatusOfTask = async (id) => {
    try {
        const tasks = await AsyncStorage.getItem('tasks');
        const task = JSON.parse(tasks).filter((task) => task.id === id);
        task[0].status = 1;
        const updatedTasks = JSON.parse(tasks).filter((task) => task.id !== id);
        updatedTasks.push(...task);
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
        console.error(error.message);
    }
}

export const getTasks = async () => {
    try {
        const tasks = await AsyncStorage.getItem('tasks');
        return JSON.parse(tasks);
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (id) => {
    try {
        const tasks = await AsyncStorage.getItem('tasks');
        const updatedTasks = JSON.parse(tasks).filter((task) => task.id != id)
        
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
        console.error(error.message);
    }
}

export const getTask = async (id) => {
    try {
        const tasks = await AsyncStorage.getItem('tasks');
        const task = JSON.parse(tasks).filter((task) => task.id === id)
        return task;
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = async (id, data) => {
    try {
        const tasks = await AsyncStorage.getItem('tasks');
        const updatedTasks = JSON.parse(tasks).filter((task) => task.id !== id);
        updatedTasks.push(data);
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteAllTasks = async (id) => {
    try {
        await AsyncStorage.removeItem('tasks');
    } catch (error) {
        console.error(error.message);
    }
}
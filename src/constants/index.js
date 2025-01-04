import * as theme from './theme';

const constants = {
    priorities: [
        {
            text: "Low Priority",
            color: "bg-green-500",
            value: 'low'
        },
        {
            text: "Normal Priority",
            color: "bg-yellow-500",
            value: 'normal'
        },
        {
            text: "High Priority",
            color: "bg-red-500",
            value: 'high'
        }
    ]
};

export {
    theme,
    constants
}
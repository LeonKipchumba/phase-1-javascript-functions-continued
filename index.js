function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
// Define mondayWork as a function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Define wrapAdjective as a function expression
const wrapAdjective = function(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
};

// Export both functions
module.exports = { mondayWork, wrapAdjective };


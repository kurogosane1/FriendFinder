//This is where all the friends score are going to be stored//
//We create an Array of friends and their score//
var tableArray = [
    {
        name: "Anthony",
        photo: "https://www.linkedin.com/in/anthony-myhre-289b629a/",
        score:[
            5,4,3,2,5,2,1,1,5,1]
    },
    {
        name: "Rachel",
        photo: "https://www.linkedin.com/in/rachel-thiim-67b55a12a/",
        score:[1,3,4,1,5,2,4,1,3,1]
    },
    {
        name: "Alex",
        photo: "https://www.linkedin.com/in/alex-slayton-831a867b/",
        score: [5,2,1,5,2,1,4,5,1,2]
    },
    {
        name: "Peter",
        photo:'https://www.linkedin.com/in/hoangpeterd/',
        score: [2,2,3,4,1,5,2,3,5,1]
    },
    {
        name: "Megan",
        photo: 'https://www.linkedin.com/in/meganliken/',
        score: [1,5,2,4,1,5,2,4,5,5]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
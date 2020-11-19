const express = require('express');
const app = express();
const mongoos = require('mongodb');
mongoos.connect('mongodb://localhost/Mentor').then(()=>console.log("Connected")).catch('error');
app.use(express.json());
const mentors = [
    {
        id:1,
        name:"mrigank",
        company:"Visa",
        availabilityHours:10,
        mentees:[2],
        sessions: [{
            menteeId: 2,
            duration: 60,
            statTime: new Date()
        },{
            menteeId: 1,
            duration: 60,
            statTime: new Date()
        }]
    },
    {
        id:2,
        name:"Sandeep",
        company:"Amazon",
        availabilityHours:10
    },
    {
        id:3,
        name:"Govind",
        company:"Visa",
        availabilityHours:9
    },
    {
        id:4,
        name:"Gaurav",
        company:"AJIO",
        availabilityHours:8
    },
];
const mentees = [
    {
        id:1,
        name:"Dinesh",
    },
    {
        id:2,
        name:"Archana",
    },
    {
        id:3,
        name:"Sowji",
    },
    {
        id:4,
        name:"MPK",
    },
    {
        id:5,
        name:"Suresh",
    },
];

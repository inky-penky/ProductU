import netflix from "../mentorImage/netflix.png"
import bereal from "../mentorImage/bereal.png"
import bumble from "../mentorImage/bumble.png"
import tinder from "../mentorImage/tinder.png"
import gmaps from "../mentorImage/googlemaps.png"
import cowin from "../mentorImage/cowin.png"
import discord from "../mentorImage/discord.png"
import instagram from "../mentorImage/instagram.png"
import micro from "../mentorImage/microsoft.png"
import google from "../mentorImage/google.png"

const Data = [
    {
        id : 1,
        module: "Module 1",
        title: "Introduction to Product management",
        courses: [{id: 1, name: "What is PM?"}, {id: 2, name:"PM in B2B, B2C, and D2C industries"}, {id:3, name:"Assignment 1"}],
        tag: "Case Studies on",
        caseStudy : [netflix, bereal]
        caseStudy : [{logoOne: "", logoTwo: ""}]
    },
    {
        id : 2,
        module: "Module 2",
        title: "Strategic understanding of company",
        courses: [{id: 1, name: "Role of PM in Strategic Decision making"}, {id: 2, name:"Frameworks and Tools used at work"}, {id:3, name:"Assignment 2"}],
        tag: "Case Studies on",
        caseStudy : [bumble, tinder]
        caseStudy : [{logoOne: "", logoTwo: ""}]
    },
    {
        id : 3,
        module: "Module 3",
        title: "Defining the Product roadmap",
        courses: [{id: 1, name: "Defining the Problem statement"}, {id: 2, name:"Design Thinking"}, {id: 3, name: "Rapid prototyping of solution"}, {id:4, name:"Assignment 3"}],
        tag: "Case Studies on",
        caseStudy : [gmaps, cowin]
        caseStudy : [{logoOne: "", logoTwo: ""}]
    },
    {
        id : 4,
        module: "Module 4",
        title: "Design for Value",
        courses: [{id: 1, name: "Understand the Value proposition"}, {id: 2, name: "Key parameters of product life cycle"}, {id:3, name:"Assignment 4"}],
        tag: "Case Studies on",
        caseStudy : [discord]
        caseStudy : [{logoOne: "", logoTwo: ""}]
    },
    {
        id : 5,
        module: "Module 5",
        title: "Build your product at scale",
        courses: [{id: 1, name: "Sentimental analysis"}, {id: 2, name:"A/B testing"}, {id:3, name:"Assignment 5"}],
        tag: "Case Studies on",
        caseStudy : [instagram, discord]
        caseStudy : [{logoOne: "", logoTwo: ""}]
    },
    {
        id : 6,
        module: "Module 6",
        title: "Write a Hire worthy case study",
        courses: [{id: 1, name: "1:1 review of Capstone project from your mentor"}, {id: 2, name:"Prepare a World class resume!"}],
        tag: "Get interviews from",
        caseStudy : [micro, google]
        caseStudy : [{logoOne: "", logoTwo: ""}]
    }
]
export default Data


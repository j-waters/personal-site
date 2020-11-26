<template>
    <div class="portfolio">
        <project
            v-for="(project, i) in projects"
            :key="project.name"
            :reverse="i % 2 === 1"
            :data="project"
        /></div
></template>

<script>
    import Project from "@/components/Project";
    export default {
        name: "Portfolio",
        components: { Project },
        data() {
            return {
                projects: [
                    {
                        name: "Lucrum",
                        subtitle: "A money management and budgeting system",
                        github: "https://github.com/j-waters/Lucrum",
                        description:
                            "Designed for personal use during university, " +
                            "Lucrum can import bank transactions, categorising them automatically, " +
                            "and has a clean modern interface that works on desktop and mobile.<br/> <br/>" +
                            "Lucrum was developed to be a free yet full featured alternative to " +
                            "other money management apps, many of which lacked student-specific " +
                            "features like bill splitting <br/> <br/>" +
                            "The frontend is built using Vue JS JavaScript framework, and is based on Google's " +
                            "Material Design 2 specifications. The backend is written in Python using Flask, and can be used " +
                            "independently from the frontend as a REST API. "
                    },
                    {
                        name: "Fetula",
                        subtitle: "A self hosted photo management system",
                        github: "https://github.com/j-waters/Fetula",
                        description:
                            "A web based photo viewing and management system, with basic editing capabilities and AI. " +
                            "Fetula can ingest a large structured photo collection, automatically sorting and tagging each image. <br/> <br/>" +
                            "Fetula was designed as a replacement to Google Photos, keeping its cool AI tricks while " +
                            "working seamlessly with a pre-existing offline photo collection. Features such as object and facial recognition " +
                            "are not only implemented, but are a lot more transparent and come with more options. <br/> <br/>" +
                            "The frontend was built using Vue JS, trying to mimic the look of Google Photos. The backend was written in Python with Flask."
                    },
                    {
                        name: "Multipyer",
                        subtitle: "A multiplayer game framework and dashboard",
                        github: "https://github.com/j-waters/Multipyer-Server",
                        website: "http://multipyer.jamescwaters.com",
                        description:
                            "Multipyer was created for my A-Level Computer Science coursework (and received an A*). " +
                            "It was designed to allow beginner programmers to create online multiplayer games in Python and JavaScript " +
                            "without having to write complex code or set up their own server.<br/> <br/>" +
                            "After creating an account on the Multipyer website, a developer would have access to an online console " +
                            "to create game servers, leaderboards, and manage player accounts. Then, using the Python and JavaScript libraries, " +
                            "the developer could create a working multiplayer game in as little as 3 lines of code. <br/> <br/>" +
                            "The Multipyer server was created using JavaScript and jQuery on the frontend with a Python backend. The " +
                            "Python and JavaScript client libraries were written in their own languages."
                    },
                    {
                        name: "Dashboard",
                        subtitle: "A smart-home control dashboard",
                        github: "https://github.com/j-waters/Dashboard",
                        description:
                            "An all-in-one smart-light controller, clock, schedule, weather display and picture frame. <br/> <br/>" +
                            "The 'frontend' for my <a href='https://github.com/j-waters/Home-Manager'>smart-home controller</a>, this site runs on an inexpensive wall-mounted android tablet. <br/> <br/>" +
                            "Written using Vue JS."
                    },
                    {
                        name: "Bouncr",
                        subtitle: "An addictive Android Arcade game",
                        github: "https://github.com/j-waters/Bouncr-Game",
                        website:
                            "https://play.google.com/store/apps/details?id=com.lightopa.bouncr",
                        description:
                            "A simple but addictive game, with 7 unique game modes, 16 unlockable colour schemes, 80 challenges, with achievements and leaderboards. " +
                            "Advert-supported, with an optional micro-transaction.<br/> <br/>" +
                            "Written in JavaScript using the Phaser JS game engine and packaged for Android with Cordova."
                    },
                    {
                        name: "Libellus",
                        subtitle: "A life-logging dashboard",
                        description:
                            "Libellus was created to combine data from many different sources like Google Fit and a bank account, as well as phone and PC " +
                            "usage data. It also supports diary entries and mood tracking.<br/> <br/>" +
                            "Its purpose is to act as an automatic diary, and provide insights into how things like sleep patterns and exercise are " +
                            "affected by the day's activities, and how one's mood and productivity changes depending on what apps are used during a day. <br/> <br/>" +
                            "The frontend was built using Vue JS, the backend in Python."
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .portfolio {
        font-size: 1em;
    }
</style>

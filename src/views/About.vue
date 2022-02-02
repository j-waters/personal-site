<template>
    <div class="about">
        <h1>Hello!</h1>
        <p>
            My name's James, and I'm a third year computer science student at
            Southampton University
        </p>
        <p>
            I interned for 2 summers at
            <a href="https://netcraft.com">Netcraft</a>, and worked part time as
            a frontend developer at
            <a href="https://www.buckleconsulting.com/">Buckle Consulting</a>
            for a year
        </p>
        <p>
            See my <router-link to="/portfolio">portfolio</router-link> or my
            <a href="https://github.com/j-waters">Github</a>
            to see most of my personal projects and some of my coursework
        </p>
        <h4>Proficient</h4>
        <p>
            <span
                class="skill"
                v-for="skill in skills.proficient"
                :key="skill"
                >{{ skill }}</span
            >
        </p>
        <h4>Familiar</h4>
        <p>
            <span class="skill" v-for="skill in skills.familiar" :key="skill">{{
                skill
            }}</span>
        </p>
    </div>
</template>

<script lang="ts" setup>
const skills = {
    proficient: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "SQL",
        "NestJS",
        "VueJS",
        "Angular",
        "Android",
    ],
    familiar: [
        "Haskell",
        "Perl",
        "Azure Functions",
        "Google Cloud",
        "Docker",
        "MongoDB",
    ],
};
</script>

<style scoped lang="scss">
.about {
    text-align: center;
}

.skill:not(:last-child)::after {
    content: " • ";
}

h4 {
    /*margin-bottom: ;*/
    margin-block-end: 0;
}

a {
    cursor: pointer;
    pointer-events: initial;
}

a:link {
    /*text-decoration: inherit;*/
    color: inherit;
}

a:visited {
    /*text-decoration: inherit;*/
    color: inherit;
}
</style>

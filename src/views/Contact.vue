<template>
    <div class="contact">
        <div><h1>Email me!</h1></div>
        <div>
            <h1>
                <a href="mailto:james@jcwaters.co.uk">james@jcwaters.co.uk</a>
            </h1>
        </div>
    </div></template
>

<script lang="ts" setup></script>

<style scoped>
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

.contact {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

h1 {
    font-size: 3em;
    width: 100%;
}
</style>

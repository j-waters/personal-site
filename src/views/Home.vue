<template>
    <div class="home">
        <home-navigation></home-navigation>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import HomeNavigation from "@/components/HomeNavigation.vue";

    export default defineComponent({
        name: "Home",
        components: { HomeNavigation }
    });
</script>

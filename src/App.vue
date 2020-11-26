<template>
    <div id="root" :class="{ before }">
        <background-particles></background-particles>
        <div id="container">
            <transition :name="navTransitionName">
                <top-navigation v-if="notHome" />
            </transition>
            <router-view :class="{ page: notHome }" v-slot="{ Component }">
                <transition :name="transitionName">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script>
    import BackgroundParticles from "@/components/BackgroundParticles";
    import Home from "@/views/Home";
    import TopNavigation from "@/components/TopNavigation";

    export default {
        components: { TopNavigation, BackgroundParticles, Home },
        data() {
            return {
                before: true,
                noTransition: false,
                transitionName: "",
                navTransitionName: ""
            };
        },
        watch: {
            $route(to, from) {
                if (!from.name) {
                    this.before = false;
                    this.transitionName = "";
                    this.navTransitionName = "";
                } else {
                    this.transitionName = "slide";
                    this.navTransitionName = "nav-slide";
                }
            }
        },
        computed: {
            notHome() {
                return this.$route.name && this.$route.name !== "Home";
            }
        }
    };
</script>

<style lang="scss">
    html {
        background: black;
    }

    body {
        margin: 0;
        /*font-size: 30px;*/
        overflow-x: hidden;
        /*overflow-y: auto;*/
    }

    ::-webkit-scrollbar {
        width: 10px;
        background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #555;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
    }
</style>

<style lang="scss" scoped>
    #root {
        background: rgb(2, 0, 36);
        background: linear-gradient(
            rgba(46, 64, 87, 1) 0%,
            rgba(2, 0, 36, 1) 80%
        );
        min-height: 100vh;
        opacity: 1;
        transition: opacity 1.5s;
    }

    #root.before {
        opacity: 0;
    }

    #container {
        position: relative;
        z-index: 2;
        height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0 5px;
    }

    .wrapper {
        width: inherit;
    }

    .page {
        background: rgba(2, 0, 36);
        box-shadow: 0px 0px 0.3em 0.3em rgb(2, 0, 36);
        color: #eee5e9;
        overflow: auto;
        will-change: opacity, transform;
        font-family: "Comfortaa", cursive;
        height: calc(100vh - 3em);
        /*padding: 5px;*/
    }

    $duration: 2s;

    .slide {
        &-enter-active,
        &-leave-active {
            position: fixed;
            /*background: white;*/
            min-height: calc(100vh - 3em);
            top: 3em;
            width: inherit;

            &.home {
                top: 0;
                min-height: 100vh;
            }
        }

        &-enter-active {
            transition: transform $duration ease-in-out;
            z-index: 2;
            transform: translateY(100%);
        }

        &-enter-to {
            z-index: 2;
            transform: translateY(0%);
        }

        &-leave-active {
            /*z-index: -1;*/
            transition: opacity $duration, transform $duration;
        }

        &-leave-to {
            /*z-index: -1;*/
            opacity: 0;
            &:not(.home) {
                transform: translateY(100%);
            }
        }
    }

    .nav-slide {
        &-enter-active,
        &-leave-active {
            transition: opacity, transform;
            transition-duration: 2s;
        }

        &-enter-from,
        &-leave-to {
            opacity: 0;
            transform: translateY(-100%);
        }
    }

    @media screen and (min-width: 769px) {
        #container {
            margin: 0 64px;
            width: calc(100% - 64px * 2);
        }
    }

    @media screen and (min-width: 1440px) {
        #container {
            margin: auto; //0 calc(50% - 720px + 64px);
            width: calc(1440px - 64px * 2);
        }
    }

    /*@media screen and (min-width: 320px) {*/
    /*    html {*/
    /*        font-size: calc(30px + 40 * ((100vw - 320px) / 1600));*/
    /*    }*/
    /*}*/

    /*p {*/
    /*    font-size: 0.35em;*/
    /*}*/

    /*@media screen and (max-width: 768px) {*/
    /*    p {*/
    /*        font-size: 16px;*/
    /*    }*/
    /*}*/
</style>

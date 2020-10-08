<template>
    <header>
        <h1>Welcome to you {{$route.params.salut}} {{$route.params.firstName}} {{$route.params.lastName}}!</h1>
        <p @click="sendMeHome">Go Back Home</p>
    </header>
</template>

<script>
export default {
    name:"StudentInfo",
    methods: {
        sendMeHome() {
            console.log("Now I shall click my heels together 3 times");
            console.log(this.$route.params.firstName);
            console.log(this.$router);
            this.$router.push({path:'/'});
        }
    },
}
</script>

<style>

</style>
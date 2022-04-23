<template>
  <router-view :key="$route.name"/>
</template>

<script>
import "./assets/reset.css"

export default {
}
</script>

<style>
    #app {
        background-color: #1F2025;
        display: grid;
        grid-template-columns: 15% 65% 20%;
    }
</style>

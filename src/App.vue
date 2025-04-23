<template>
    <nav>
        <RouterLink
            v-for="route in allRoutes"
            :key="route.path"
            :to="route.path"
        >
            {{ route.name }}
        </RouterLink>
    </nav>

    <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";

const router = useRouter();
const allRoutes = router.getRoutes();
</script>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin: 0 0 5rem 0;
}

nav a.router-link-exact-active {
    color: #54a7ff;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 2rem;
    border-left: 1px solid var(--color-border);
    color: var(--color-text);
}

nav a:first-of-type {
    border: 0;
}
</style>

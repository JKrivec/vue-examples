<template>
    <h1>
        Show all items with property<span class="property-span">show = true</span>on the screen.
    </h1>
    <div></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const itemsLength = 1000;

function generateItemShowList() {
    const showList = [];
    for (let i = 0; i < itemsLength; i++) {
        showList.append;
    }
}

function generateItems() {
    for (let i = 0; i < 1000; i++) {
        const item = {
            id: i,
            show,
        };
    }
    return items;
}

const items = ref(0);
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 1rem;
}

.property-span {
    font-family: monospace;
    margin: 0.5rem;
    padding: 0 0.5rem;
    background-color: rgba(128, 128, 128, 0.38);
    border-radius: 3px;
}
</style>

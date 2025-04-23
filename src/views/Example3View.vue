<template>
    <h1>
        Show all items with property<span class="property-span">show = true</span>on the screen.
    </h1>
    <div class="item-container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Item {
    id: number;
    show: boolean;
}

const itemsLength = 1000;

const items = ref<Item[]>([]);

function generateItemShowList() {
    const showList = [];
    for (let i = 0; i < itemsLength; i++) {
        showList.push(Math.random() < 0.1);
    }
    return showList;
}

function generateItems() {
    const showList = generateItemShowList();
    const itemArray: Item[] = [];

    for (let i = 0; i < itemsLength; i++) {
        itemArray.push({
            id: i,
            show: showList[i],
        });
    }

    items.value = itemArray;
}

function startUpdatingItemShowListPeriodically(): void {
    setInterval(() => {
        const showList = generateItemShowList();
        for (let i = 0; i < items.value.length; i++) {
            items.value[i].show = showList[i];
        }
    }, 1);
}

// Call the function to populate the ref
onMounted(() => {
    generateItems();
    startUpdatingItemShowListPeriodically();
});
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

.item-container {
    display: flex;
    flex-wrap: wrap;
}

.item {
    background-color: rgba(128, 128, 128, 0.19);
    margin: 1rem;
    width: 100px;
}
</style>

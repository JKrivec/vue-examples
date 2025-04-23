<template>
    <h1>Why arent my items loading?</h1>
    <div class="grid">
        <div
            v-for="item in items"
            :key="item.id"
            class="grid-item"
        >
            <div v-if="item.loaded">{{ item.title }}</div>
            <div v-else>Loading...</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

interface GridItem {
    id: number;
    title: string;
    loaded: boolean;
}

const items = ref<GridItem[]>([]);

const loadItem = (item: GridItem) => {
    setTimeout(() => {
        item.loaded = true;
    }, Math.random() * 3000);
};

const generateItems = () => {
    for (let i = 1; i <= 8; i++) {
        const item: GridItem = {
            id: i,
            title: `Item ${i}`,
            loaded: false,
        };
        loadItem(item);
        items.value.push(item);
    }
};

onMounted(() => {
    generateItems();
});
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 1rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
.grid-item {
    color: white;
    background-color: #373737;
    text-align: center;
    padding: 2rem 1rem;
    border-radius: 3px;
}
</style>

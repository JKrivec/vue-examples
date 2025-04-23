<template>
    <h1>Improve search performance</h1>
    <div>
        <h2>Search Items</h2>
        <input
            v-model="searchQuery"
            placeholder="Search..."
        />
        <div>
            <p>
                Render Time: <strong>{{ renderTime }} ms</strong>
            </p>
            <p style="margin-bottom: 2rem">Total: {{ getFilteredItems().length }}</p>
            <p
                v-for="item in getFilteredItems()"
                :key="item.id"
            >
                {{ item.name }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

interface Person {
    id: number;
    name: string;
}

const searchQuery = ref("");

const adjectives = ["Sneaky", "Happy", "Loud", "Ancient", "Tiny", "Glorious", "Wobbly"];
const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace"];
const nouns = ["Banana", "Spaceship", "Tiger", "Cupcake", "Keyboard", "Unicorn"];

function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

const items = ref<Person[]>(
    Array.from({ length: 500 }, (_, i) => {
        const name = `${getRandomElement(adjectives)} ${getRandomElement(firstNames)}'s ${getRandomElement(nouns)}`;
        return {
            id: i,
            name,
        };
    }),
);

function expensiveFilter(person: Person): boolean {
    const now = performance.now();
    while (performance.now() - now < 0.2) {} // Block ~0.2ms
    return person.name.includes(searchQuery.value);
}

function getFilteredItems(): Person[] {
    return items.value.filter((person) => expensiveFilter(person));
}

// Speed test
const renderTime = ref(0);
watchEffect(() => {
    const start = performance.now();

    const filteredItem = getFilteredItems()[0];
    console.log(filteredItem);

    const end = performance.now();
    renderTime.value = +(end - start).toFixed(2);
});
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 2rem;
}
</style>

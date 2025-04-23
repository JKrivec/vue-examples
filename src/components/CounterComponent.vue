<template>
    <div class="counter-component">
        <h2>CounterComponent.vue</h2>
        <p>Counter {{ step }}</p>
        <button @click="onClick">Increase counter</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
    step: number;
}>();

const emit = defineEmits<{
    (e: "change", payload: { step: number }): void;
}>();

function onClick() {
    emit("change", { step: props.step + 1 });
}
</script>

<style scoped>
.counter-component {
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 5px;
    padding: 3rem;
    margin: 5rem;
}
</style>

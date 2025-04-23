<template>
    <h1>Create a a button on parent, that will increase the counter in the child.</h1>
    <div class="parent-component">
        <h2>Parent View</h2>
        <p>Counter: {{ step }}</p>
        <MyComponent
            class="child-component"
            :step="step"
            @change="handleStepChange"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MyComponent from "@/components/CounterComponent.vue";

const step = ref(0);

function handleStepChange(payload: { step: number }) {
    step.value = payload.step;
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 1rem;
}
</style>

<template>
    <div class="home">
        <img
            src="@/assets/logo.svg"
            alt="perception_logo.png"
        />
        <p>Test test test test</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const translateX = ref(0);
const translateY = ref(0);

let canUpdate = true;

const handleMouseMove = (event: MouseEvent) => {
    if (canUpdate) {
        const mouseX = event.clientX - window.innerWidth / 2;
        const mouseY = event.clientY - window.innerHeight / 2;
        translateX.value = mouseX * 0.01;
        translateY.value = mouseY * 0.01;

        canUpdate = false;
        setTimeout(() => {
            canUpdate = true;
        }, 100);
    }
};

// Add and remove event listener
onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style lang="css" scoped>
.home {
    margin-top: 10%;
    transform: translate(calc(var(--translate-x) * -1px), calc(var(--translate-y) * -1px));
    transition: transform 0.2s ease-out; /* Slightly slower transition */
}

img {
    display: block;
    margin: auto;
    width: 10%;
}

p {
    margin-top: 1rem;
    text-align: center;
}

:where(.home) {
    --translate-x: v-bind(translateX);
    --translate-y: v-bind(translateY);
}
</style>

<template>
    <div :class="['card', dark]">
        <img :src="image" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">
                {{ title }}
            </h5>
            <p class="card-text">
                {{ content }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    title: string
    content?: string
    image: string
    dark?: boolean
}>()
</script>
<style scoped lang="scss">
@import '@/assets/main.scss';

.card {
    width: 520px;
    height: fit-content !important;

    &.dark {
        background-color: $secondary !important;
        border-color: $quaternary !important;

        h5,
        p {
            color: $white;
        }
    }

    .card-title {
        margin-bottom: $val-12;

        h5 {
            font-size: $val-20;
            font-weight: 400;
            line-height: 150%;
        }

        p {
            font-weight: 300;
            line-height: 150%;
        }
    }

    .card-img-top {
        max-height: 560px;
        min-height: 320px;
        width: auto;
        object-fit: cover;
    }
}
</style>

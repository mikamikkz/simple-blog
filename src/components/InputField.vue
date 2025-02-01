<template>
  <div class="input-field">
        <label
            for="email"
            class="form-label text-tertiary"
            :class="{
                'filled' : model,
                required
            }"
        >
            {{ label }}
        </label>
        <input
            :type="type"
            class="form-control"
            :id="id"
            v-model="model"
        />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string,
    type: string,
    id: string,
    required?: boolean
}>();

const model = defineModel()
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

@mixin filled-input-label {
  top: -10px;
  font-size: $val-14;
  background-color: white;
  transition: top .1s ease-in-out;
}

.input-field {
    position: relative;

    &:focus-within .form-label {
        @include filled-input-label;
    }

    .form {
        &-control {
            height: 44px;

            &:focus {
                border: 2px solid $accent-border;
                box-shadow: none;
            }
        }

        &-label {
            position: absolute;
            top: $val-10;
            left: $val-9;
            padding-inline: 4px;
            transition: top .1s ease-in-out;
            user-select: none;
            pointer-events: none;

            &.filled {
                @include filled-input-label;
            }
        }
    }
}
</style>

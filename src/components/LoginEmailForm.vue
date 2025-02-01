<template>
    <div class="login-form card shadow-sm p-3">
        <div class="card-body d-grid gap-4">
            <div class="card-title d-flex align-items-center mb-0 gap-2">
                <button
                    class="btn p-0"
                    @click="goBack"
                >
                    <i class="mdi mdi-chevron-left text-tertiary"></i>
                </button>
                <h4 class="fw-medium mb-0">Login</h4>
            </div>
            <div class="d-flex flex-column gap-3">
                <InputField
                    label="Email"
                    id="email"
                    type="email"
                    v-model="email"
                />
                <div class="d-grid gap-1">
                    <InputField
                        label="Password"
                        id="password"
                        type="text"
                        v-model="password"
                    />
                    <a href="" class="text-accent link-underline link-underline-opacity-0 text-end">
                        Forgot password?
                    </a>
                </div>
            </div>
            <div class="d-flex flex-column gap-3">
                <button class="btn btn-primary" type="button">
                    Login
                </button>
                <p class="text-tertiary text-semi-small text-center">
                    Don't have an account?
                    <router-link
                        to="signup"
                        class="text-accent link-underline link-underline-opacity-0"
                    >
                        Signup here
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputField from './InputField.vue';
import router from '@/router';

const email = ref('');
const password = ref('');

function goBack() {
    router.push({
        name: 'auth',
    })
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.card {
    width: 480px;

    &-title {
        button {
            border-radius: $val-28 !important;

            i {
                font-size: $val-28;
            }

            &:hover {
                background-color: var(--gray-20);
            }

            &:focus {
                border-color: $tertiary;
            }
        }
    }
}
</style>

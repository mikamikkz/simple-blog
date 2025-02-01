<template>
    <div class="login-form card shadow-sm p-3">
        <div class="card-body d-grid gap-4">
            <div class="card-title d-flex align-items-center mb-0 gap-2">
                <button class="btn p-0" @click="goBack">
                    <i class="mdi mdi-chevron-left text-tertiary"></i>
                </button>
                <h4 class="fw-medium mb-0">Create account</h4>
            </div>
            <div class="d-flex flex-column gap-3">
                <InputField label="Email" id="email" type="email" v-model="email" required />
                <div class="d-grid gap-2">
                    <InputField
                        label="Password"
                        id="password"
                        type="text"
                        v-model="password"
                        required
                    />
                    <div class="d-grid">
                        <p class="text-semi-small text-tertiary m-0">
                            Password must contain the following:
                        </p>
                        <p class="text-semi-small text-tertiary m-0">
                            <i class="mdi mdi-checkbox-blank-outline text-quaternary"></i>
                            At least 8 characters
                        </p>
                        <p class="text-semi-small text-tertiary m-0">
                            <i class="mdi mdi-checkbox-blank-outline text-quaternary"></i>
                            At least one number
                        </p>
                    </div>
                </div>
                <InputField
                    label="Confirm Password"
                    id="confirmPassword"
                    type="text"
                    v-model="confirmPassword"
                    required
                />
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label text-tertiary text-semi-small" for="flexCheckDefault">
                        I agree to the
                        <router-link
                            to="/"
                            class="text-accent link-underline link-underline-opacity-0"
                        >
                            Terms of Service
                        </router-link>
                        and
                        <router-link
                            to="/"
                            class="text-accent link-underline link-underline-opacity-0"
                        >
                            Privacy Policy.
                        </router-link>
                    </label>
                </div>
            </div>
            <div class="d-flex flex-column gap-3">
                <button class="btn btn-primary" type="button"> Create account </button>
                <p class="text-tertiary text-semi-small text-center">
                    Already have an account?
                    <router-link
                        to="login"
                        class="text-accent link-underline link-underline-opacity-0"
                    >
                        Login here
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputField from './InputField.vue'
import router from '@/router'

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

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

<template>
    <div class="login-form card shadow-sm p-3">
        <div class="card-body">
            <h4 class="card-title fw-medium text-center mb-4">Let's get started</h4>
            <div class="d-flex flex-column gap-5">
                <div class="d-flex flex-column gap-2">
                    <p class="text-tertiary mb-0 ms-2">Login or Sign up with</p>
                    <button
                        class="btn btn-outline-secondary mb-1"
                        type="button"
                        @click="$emit('google')"
                    >
                        <div class="d-flex align-items-center justify-content-center gap-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" />
                            Continue with Google
                        </div>
                    </button>
                    <button
                        class="btn btn-outline-secondary mb-1"
                        type="button"
                        @click="$emit('apple')"
                    >
                        <div class="d-flex align-items-center justify-content-center gap-2">
                            <i class="mdi mdi-apple" />
                            Continue with Apple
                        </div>
                    </button>
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="$emit('email')"
                    >
                        <div class="d-flex align-items-center justify-content-center gap-2">
                            <i class="mdi mdi-email-outline" />
                            Continue with email
                        </div>
                    </button>
                </div>
                <div class="d-flex flex-column gap-2">
                    <div class="divider">
                        <p class="text-tertiary text-center">or</p>
                    </div>
                    <button
                        class="btn btn-outline-primary"
                        type="button"
                        @click="$emit('signup')"
                    >
                        Create an account
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineEmits(['google', 'apple', 'email', 'signup'])
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.card {
    width: 480px;

    img {
        width: $val-20;
    }

    .divider {
        position: relative;
        outline: $white;

        &:after,
        &:before {
            content: '';
            position: absolute;
            top: $val-13;
            height: $val-1;
            width: 46%;
            background-color: $quaternary;
        }

        &:before {
            left: 0;
        }

        &:after {
            right: 0;
        }
    }
}
</style>

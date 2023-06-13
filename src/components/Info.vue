<template>
    <h1>Personal Info</h1>
    <p>Please provide your name, email address, and phone number.</p>

    <div class="formContainer">
        <form id="infoForm" @submit.prevent="handleSubmit" novalidate>
            <div class="inputTop">
                <label for="name">Name</label>
                <p class="error" v-if="!validName && submitted">This field is required</p>
            </div>
            <input :class="!validName && submitted ? 'inputError' : ''" type="text" id="name" placeholder="John Doe"
                v-model="store.name" required.prevent>

            <div class=" inputTop">
                <label for="email">Email Address</label>
                <p class="error" v-if="!validEmail && submitted">This field is required</p>
            </div>
            <input :class="!validEmail && submitted ? 'inputError' : ''" type="email" id="email"
                placeholder="email@email.com" v-model="store.email" required.prevent>
            <div class="inputTop">
                <label for="phone">Phone Number</label>
                <p class="error" v-if="!validPhone && submitted">This field is required</p>
            </div>
            <input :class="!validPhone && submitted ? 'inputError' : ''" type="text" id="phone" placeholder="5544332211"
                v-model="store.phone" maxlength="10" minlength="10" required.prevent>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { store } from '../store/store';

let submitted = ref(false)
let validName = ref(false)
let validEmail = ref(false)
let validPhone = ref(false)

function handleSubmit(event) {
    event.preventDefault();
    const emailInput = event.target.elements.email
    const phoneInput = event.target.elements.phone
    if (store.name.length > 1) {
        validName.value = true
    }
    if (emailInput.validity.valid && store.email.length > 1) {
        validEmail.value = true
    }
    if (phoneInput.validity.valid && store.phone.length === 10) {
        validPhone.value = true
    }
    if (validName.value && validEmail.value && validPhone.value) {
        store.infoComplete = true
        store.step = 2
    } else {
        store.infoComplete = false
        store.step = 1
    }
    submitted.value = true
}
</script>
<style scoped>
.formContainer form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
}

.formContainer form label {
    color: var(--marine-blue);
    font-size: 15px;
}

.formContainer form input {
    font-size: 16px;
    padding: .8rem;
    border-radius: 10px;
    outline: transparent;
    border: 1px solid var(--light-gray);
    color: var(--marine-blue);
    font-weight: bold;
    margin-top: .2rem;
    margin-bottom: 1rem;
    cursor: pointer;
}

.formContainer form input:focus {
    border-color: var(--purplish-blue) !important;
}



h1 {
    font-weight: bold;
    color: var(--marine-blue);
}

.content p {
    color: var(--cool-gray)
}

.formContainer button {
    align-self: end;
    margin-top: 75px;
    padding: 1rem 1.5rem;
    font-size: 16px;
    color: white;
    background-color: var(--marine-blue);
    font-weight: 500;
    border: transparent;
    border-radius: 10px;
}

.inputTop {
    display: flex;
    justify-content: space-between;
}

.error {
    color: red !important;
    font-size: 14px;
}

.inputError {
    border-color: red !important;
}
</style>
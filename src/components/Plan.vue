<template>
    <h1>Select your plan</h1>
    <p class="underTitle">You have the option of monthly or yearly billing.</p>
    <div class="plansContainer">
        <div class="arcade" :class="[store.plan === 1 ? 'selectedPlan' : '']" @click="select(1)">
            <img src="/images/icon-arcade.svg">

            <div class="planWords">
                <p class="planTitle">Arcade</p>
                <p v-if="store.monthly" class="planPrice">$9/mo</p>
                <p v-if="store.yearly" class="planPrice">$90/yr</p>
                <p v-if="store.yearly" class="planOffer">2 months free</p>
            </div>
        </div>
        <div class="advanced" :class="[store.plan === 2 ? 'selectedPlan' : '']" @click="select(2)">
            <img src="/images/icon-advanced.svg">

            <div class="planWords">
                <p class="planTitle">Advanced</p>
                <p v-if="store.monthly" class="planPrice">$12/mo</p>
                <p v-if="store.yearly" class="planPrice">$120/yr</p>
                <p v-if="store.yearly" class="planOffer">2 months free</p>
            </div>
        </div>
        <div class="pro" :class="[store.plan === 3 ? 'selectedPlan' : '']" @click="select(3)">
            <img src="/images/icon-pro.svg">

            <div class="planWords">
                <p class="planTitle">Pro</p>
                <p v-if="store.monthly" class="planPrice">$15/mo</p>
                <p v-if="store.yearly" class="planPrice">$150/yr</p>
                <p v-if="store.yearly" class="planOffer">2 months free</p>
            </div>
        </div>
    </div>
    <div class="switchContainer">
        <p :class="[store.monthly ? 'activeCheck' : '']">Monthly</p>
        <label class="switch">
            <input type="checkbox" v-model="store.checked" @change="handleSwitch">
            <span class="slider round"></span>
        </label>
        <p :class="[store.yearly ? 'activeCheck' : '']">Yearly</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store/store';

let selectedPlan = ref()
let checkedLength = ref([])

function select(number) {
    store.plan = number
    selectedPlan.value = number
}

function handleSwitch(e) {
    if (e.target.checked) {
        store.checked = true
        store.yearly = true
        store.monthly = false
    } else {
        store.checked = false
        store.yearly = false
        store.monthly = true
    }
    if (store.monthly) {
        store.yearly = true
        store.monthly = false
        for (const addon in store.addonsMonthly) {
            if (store.addonsMonthly[addon].selected) {
                store.addonsYearly[addon].selected = true
                store.addonsMonthly[addon].selected = false
            }
        }
    } else if (store.yearly) {
        store.monthly = true
        store.yearly = false
        for (const addon in store.addonsYearly) {
            if (store.addonsYearly[addon].selected) {
                store.addonsMonthly[addon].selected = true
                store.addonsYearly[addon].selected = false
            }
        }
    }
}

</script>

<style scoped>
h1 {
    font-weight: bold;
    color: var(--marine-blue);
}

.underTitle {
    color: var(--cool-gray);
}

.planPrice {
    color: var(--cool-gray)
}

.plansContainer {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    margin-top: 2.5rem;
}

.plansContainer div {
    border: 1px solid var(--cool-gray);
    padding: 1rem 1.2rem;
    width: 150px;
    border-radius: 10px;
    cursor: pointer;
}

.plansContainer div:hover {
    border-color: var(--purplish-blue);
}

.selectedPlan {
    background-color: var(--magnolia);
    border-color: var(--purplish-blue) !important;
}

.plansContainer div img {
    margin-bottom: 2.3rem;
}

.planWords {
    border: none !important;
    padding: 0 !important;
}

.planTitle {
    color: var(--marine-blue);
    font-weight: 500;
}

.planOffer {
    color: var(--marine-blue);
    font-size: 13px;
    padding-right: 1.3rem;
}

.switchContainer {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
    padding: 1rem;
    background-color: var(--alabaster);
    border-radius: 10px;
}


/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--marine-blue);
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: var(--marine-blue);
}

input:focus+.slider {
    box-shadow: 0 0 1px var(--marine-blue);
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.switchContainer p {
    color: var(--cool-gray)
}

.activeCheck {
    color: var(--marine-blue) !important;
}


.buttons {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: flex-end;
}

.buttons button {
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
}

.buttons button:nth-child(1) {
    background-color: transparent;
    outline: transparent;
    border: transparent;
    color: var(--cool-gray);
    padding: 1rem 0rem;
}

.buttons button:nth-child(2) {
    background-color: var(--marine-blue);
    color: white;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    border: 1px solid transparent;
}

@media (max-width: 500px) {
    .plansContainer {
        flex-direction: column;
    }

    .plansContainer div {
        width: 100%;
        display: flex;
    }

    .plansContainer div img {
        margin: 0;
        margin-right: 1rem;
    }

    .planWords {
        display: flex;
        flex-direction: column;
        padding: 0 !important;
    }

}
</style>

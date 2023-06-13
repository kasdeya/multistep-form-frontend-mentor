<template>
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>
    <div class="container">
        <div class="plan">
            <div class="planName">
                <p v-if="store.monthly">{{ planName }} (Monthly)</p>
                <p v-if="store.yearly">{{ planName }} (Yearly)</p>
                <button @click="switchPlan">Change</button>
            </div>
            <p class="planPrice" v-if="store.monthly">${{ planCost }}/mo</p>
            <p class="planPrice" v-if="store.yearly">${{ planCost }}/mo</p>
        </div>
        <div class="addons">
            <div class="addon" v-if="store.monthly" v-for="(addon, index) in store.addonsMonthly" :key="index">
                <p v-if="addon.selected">{{ index }}</p>
                <p class="addonPrice" v-if="addon.selected">+${{ addon.price }}/mo</p>
            </div>
            <div class="addon" v-else v-for="(addon, index2) in store.addonsYearly" :key="index2">
                <p v-if="addon.selected">{{ index2 }}</p>
                <p class="addonPrice" v-if="addon.selected">+${{ addon.price }}/yr</p>
            </div>
        </div>
    </div>

    <div class="total">
        <p v-if="store.monthly">Total (per month)</p>
        <p v-if="store.yearly">Total (per year)</p>
        <p v-if="store.monthly" class="totalPrice">+${{ total }}/mo</p>
        <p v-if="store.yearly" class="totalPrice">+${{ total }}/yr</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { store } from '../store/store';

let planName = ref("")
let subType = ref("")
let planCost = ref(0)
let total = ref(0)

function switchPlan() {
    total.value = 0
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
    calcTotal()
}

function calcTotal() {
    if (store.monthly) {
        for (const addon in store.addonsMonthly) {
            if (store.addonsMonthly[addon].selected) {
                total.value += store.addonsMonthly[addon].price
            }
        }
        store.monthlyPlans.forEach(plan => {
            if (plan.planId === store.plan) {
                total.value += plan.price
                planCost.value = plan.price
                planName.value = plan.name
            }
        })
    }

    if (store.yearly) {
        for (const addon in store.addonsYearly) {
            if (store.addonsYearly[addon].selected) {
                total.value += store.addonsYearly[addon].price
            }
        }
        store.yearlyPlans.forEach(plan => {
            if (plan.planId === store.plan) {
                total.value += plan.price
                planCost.value = plan.price
                planName.value = plan.name
            }
        })
    }
}

onMounted(() => {
    calcTotal()
})

</script>

<style scoped>
h1 {
    font-weight: bold;
    color: var(--marine-blue);
}

.content p {
    color: var(--cool-gray)
}

.container {
    margin-top: 2rem;
    background-color: var(--alabaster);
    border-radius: 10px;
    padding: 1.5rem;
}

.plan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
}

.planName p {
    color: var(--marine-blue);
    font-weight: 500;
}

.planName button {
    background-color: transparent;
    border: transparent;
    color: var(--cool-gray);
    text-decoration: underline;
    cursor: pointer;
}

.planName button:hover {
    color: var(--purplish-blue);
}

.planPrice {
    color: var(--marine-blue) !important;
    font-weight: 500;
}

/* .buttons {
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
    background-color: var(--purplish-blue);
    color: white;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    border: 1px solid transparent;
} */

.addons {
    display: flex;
    flex-direction: column;
    gap: .8rem;
}

.addon {
    display: flex;
    justify-content: space-between;
}

.addonPrice {
    color: var(--marine-blue) !important;
}

.total {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    align-items: center;
}

.totalPrice {
    color: var(--purplish-blue) !important;
    font-size: 1.3rem;
    font-weight: bold;
}
</style>
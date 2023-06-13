<template>
    <h1>Pick Add-ons</h1>
    <p class="underTitle">Add-ons help enhance your gaming experience.</p>
    <div class="addonsContainer">
        <label for="online">
            <div class="online"
                :class="[store.monthly && store.addonsMonthly['Online service'].selected || store.yearly && store.addonsYearly['Online service'].selected ? 'selectedAddon' : '']">
                <div class="container">
                    <input v-if="store.monthly" type="checkbox" name="online" id="online"
                        v-model="store.addonsMonthly['Online service'].selected">
                    <input v-else type="checkbox" name="online" id="online"
                        v-model="store.addonsYearly['Online service'].selected">
                    <span class="checkmark"></span>
                </div>
                <div class="addonDesc">
                    <p class="addonTitle">Online service</p>
                    <p class="addonSub">Access to multiplayer games</p>
                </div>
                <p v-if="store.monthly" class="addonPrice">+$1/mo</p>
                <p v-if="store.yearly" class="addonPrice">+$10/yr</p>
            </div>
        </label>
        <label for="storage">
            <div class="storage"
                :class="[store.monthly && store.addonsMonthly['Larger storage'].selected || store.yearly && store.addonsYearly['Larger storage'].selected ? 'selectedAddon' : '']">
                <div class="container">
                    <!-- <input type="checkbox" name="storage" id="storage" value="Larger storage" v-model="store.addons"> -->
                    <input v-if="store.monthly" type="checkbox" name="storage" id="storage"
                        v-model="store.addonsMonthly['Larger storage'].selected">
                    <input v-else type="checkbox" name="storage" id="storage"
                        v-model="store.addonsYearly['Larger storage'].selected">
                    <span class="checkmark"></span>
                </div>
                <div class="addonDesc">
                    <p class="addonTitle">Larger storage</p>
                    <p class="addonSub">Extra 1TB of cloud save</p>
                </div>
                <p v-if="store.monthly" class="addonPrice">+$2/mo</p>
                <p v-if="store.yearly" class="addonPrice">+$20/yr</p>
            </div>
        </label>

        <label for="profile">
            <div class="profile"
                :class="[store.monthly && store.addonsMonthly['Customizable profile'].selected || store.yearly && store.addonsYearly['Customizable profile'].selected ? 'selectedAddon' : '']">
                <div class="container">
                    <input v-if="store.monthly" type="checkbox" name="profile" id="profile"
                        v-model="store.addonsMonthly['Customizable profile'].selected">
                    <input v-else type="checkbox" name="profile" id="profile"
                        v-model="store.addonsYearly['Customizable profile'].selected">
                    <span class="checkmark"></span>
                </div>
                <div class="addonDesc">
                    <p class="addonTitle">Customizable profile</p>
                    <p class="addonSub">Custom theme on your profile</p>
                </div>
                <p v-if="store.monthly" class="addonPrice">+$2/mo</p>
                <p v-if="store.yearly" class="addonPrice">+$20/yr</p>
            </div>
        </label>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { store } from '../store/store';

let selectedAddons = ref([])

</script>

<style scoped>
h1 {
    font-weight: bold;
    color: var(--marine-blue);
}

.underTitle {
    color: var(--cool-gray);
}

.addonPrice {
    color: var(--purplish-blue)
}

.addonSub {
    color: var(--cool-gray);
}

.addonsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    margin-top: 2.5rem;
}

.addonsContainer div {
    border: 1px solid var(--light-gray);
    padding: .5rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.addonsContainer div:hover {
    border-color: var(--purplish-blue) !important;
}

.addonDesc {
    border: 0 !important;
    display: flex;
    flex-direction: column;
}

.addonDesc p {
    margin-right: auto;
}

.addonPrice {
    margin-left: auto;
}

.selectedAddon {
    background-color: var(--magnolia) !important;
    border-color: var(--purplish-blue) !important;
}

.addonTitle {
    color: var(--marine-blue);
    font-weight: 500;
}

.addonOffer {
    color: var(--marine-blue);
    font-size: 13px;
    padding-right: 1.3rem;
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

/* Customize the label (the container) */
.container {
    display: block;
    position: relative;
    padding-left: 35px;
    padding-right: 0 !important;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: none !important;
}

/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--white);
    border: 1px solid var(--light-gray);
    border-radius: 8px;
}

/* When the checkbox is checked, add a blue background */
.container input:checked~.checkmark {
    background-color: var(--purplish-blue);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container input:checked~.checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

@media (max-width: 500px) {

    .container {
        margin-top: 20px;
    }

    .addonsContainer div {
        padding: 1rem;
        align-items: center;
    }

    .addonDesc {
        padding: 0 !important;
        margin-left: 1rem;
    }

    .addonSub {
        font-size: 14px
    }
}
</style>
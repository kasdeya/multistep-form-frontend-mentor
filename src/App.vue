<script setup>
import { ref } from 'vue';
import Addons from './components/Addons.vue';
import Info from './components/Info.vue';
import Plan from './components/Plan.vue';
import Summary from './components/Summary.vue';
import Success from './components/Success.vue';
import { store } from './store/store';

const handleNext = () => {
  if (store.step >= 2) {
    store.step++
  }
}

const handleBack = () => {
  if (store.step > 1) {
    store.step--
  }
}

</script>

<template>
  <div class="container">
    <div class="sidebar">
      <div class="info">
        <div class="stepNumber" :class="store.step === 1 ? 'activeStep' : ''">1</div>
        <div class="stepDesc">
          <p>Step 1</p>
          <p>Your Info</p>
        </div>
      </div>
      <div class="plan">
        <div class="stepNumber" :class="store.step === 2 ? 'activeStep' : ''">2</div>
        <div class="stepDesc">
          <p>Step 2</p>
          <p>Select Plan</p>
        </div>
      </div>
      <div class="addons">
        <div class="stepNumber" :class="store.step === 3 ? 'activeStep' : ''">3</div>
        <div class="stepDesc">
          <p>Step 3</p>
          <p>Add-ons</p>
        </div>
      </div>
      <div class="summary">
        <div class="stepNumber" :class="store.step > 3 ? 'activeStep' : ''">4</div>
        <div class="stepDesc">
          <p>Step 4</p>
          <p>Summary</p>
        </div>
      </div>
    </div>
    <div class="content">
      <Info v-if="store.step == 1" />
      <Plan v-if="store.step == 2" />
      <Addons v-if="store.step == 3" />
      <Summary v-if="store.step == 4" />
      <Success v-if="store.step == 5" />
      <div class="buttons" :class="[store.step == 1 ? 'justifyEnd' : '']">
        <button class="backButton" v-if="store.step > 1" @click="handleBack">Go Back</button>
        <button class="nextButton" @click="handleNext" type="submit" form="infoForm" v-if="store.step !== 4">Next
          Step</button>
        <button v-if="store.step == 4" class="confirmButton" @click="handleNext">Confirm</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin: auto;
  width: 60%;
  border-radius: 10px;
  background-color: var(--white);
  padding: 1rem;
}

.sidebar {
  width: 274px;
  height: 568px;
  background-image: url('/images/bg-sidebar-desktop.svg');
  padding: 2rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.sidebar div {
  display: flex;
  height: 50px;
}

.stepNumber {
  border: 1px solid var(--white);
  border-radius: 50px;
  align-items: center;
  width: 38px;
  height: 38px !important;
  color: white;
  align-self: center;
  font-weight: 700;
  justify-content: center;
}

.stepDesc {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  text-transform: uppercase;
}

.stepDesc p:nth-child(1) {
  color: var(--light-gray);
  font-size: 14px;
}

.stepDesc p:nth-child(2) {
  color: var(--white);
  font-weight: bold;
}

.content {
  padding: 1.5rem 2rem;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  width: 60%;
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

.backButton {
  background-color: transparent;
  outline: transparent;
  border: transparent;
  color: var(--cool-gray);
  padding: 1rem 0rem;
}

.nextButton {
  background-color: var(--marine-blue);
  color: white;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  border: 1px solid transparent;
}

.nextButton:hover {
  filter: contrast(80%);
}

.confirmButton {
  color: white;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: var(--purplish-blue);
}

.justifyEnd {
  justify-content: end !important;
}

.activeStep {
  background-color: var(--light-blue);
  color: black;
}

@media (max-width: 500px) {
  .container {
    width: 100%;
    flex-direction: column;
    padding: 0;
    background-color: var(--magnolia);
    margin: 0;
    position: relative;
    min-height: 100vh;
  }

  .sidebar {
    flex-direction: row;
    background-image: url('/images/bg-sidebar-mobile.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    justify-content: center;
    height: 230px;
  }


  .stepDesc {
    display: none !important;
  }

  .content {
    background-color: var(--white);
    width: 90%;
    border-radius: 10px;
    margin-top: -100px;
    box-shadow: 0px 0px 12px 1px #888;
    margin-bottom: 100px;
  }


  .buttons {
    position: absolute;
    background-color: white;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
  }
}
</style>

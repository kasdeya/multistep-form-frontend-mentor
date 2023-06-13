import { reactive } from "vue";

export const store = reactive({
    step: 1,
    name: "",
    nameValid: true,
    email: "",
    phone: "",
    infoComplete: false,
    plan: 1,
    checked: false,
    yearly: false,
    monthly: true,
    addonsMonthly: {
        "Online service": {
            price: 1,
            selected: false
        },
        "Larger storage": {
            price: 2,
            selected: false
        },
        "Customizable profile": {
            price: 2,
            selected: false
        }
    },
    addonsYearly: {
        "Online service": {
            price: 10,
            selected: false
        },
        "Larger storage": {
            price: 20,
            selected: false
        },
        "Customizable profile": {
            price: 20,
            selected: false
        }
    },
    monthlyPlans: [
        { planId: 1, name: "Arcade", price: 9 },
        { planId: 2, name: "Advanced", price: 12 },
        { planId: 3, name: "Pro", price: 15 }
    ],
    yearlyPlans: [
        { planId: 1, name: "Arcade", price: 90 },
        { planId: 2, name: "Advanced", price: 120 },
        { planId: 3, name: "Pro", price: 150 }
    ]
})
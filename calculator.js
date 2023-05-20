const button = document.querySelector("button")
const input = document.querySelector("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204
button.addEventListener("click", function () {
    length.innerHTML = `${input.value} meters = ${(input.value * meter).toFixed(3)} feet | ${input.value} feet = ${(input.value / meter).toFixed(3)} meters`
    volume.innerHTML = `${input.value} liters = ${(input.value * liter).toFixed(3)} gallons | ${input.value} gallons = ${(input.value / liter).toFixed(3)} liters`
    mass.innerHTML = `${input.value} kilos = ${(input.value * kilogram).toFixed(3)} pounds | ${input.value} pounds = ${(input.value / kilogram).toFixed(3)} kilos`
})
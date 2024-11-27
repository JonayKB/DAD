<template>
    <div class="rounded p-5 m-5  bg-light ">
        <h3 class="text-center">{{ counter }}</h3>
        <button @click="addCounter" class="w-100 btn btn-primary p-2 m-2 d-block">Incrementar</button>
        <button @click="subCounter" class="w-100 btn btn-danger p-2 m-2 d-block">Decrementar</button>
        <button @click="resetCounter" class="w-100 btn btn-success p-2 m-2 d-block">Reiniciar</button>
        <button @click="double" class="w-100 btn btn-warning p-2 m-2 d-block">Duplicar</button>
        <input type="number" name="counter" id="counter" v-model="counter" class="w-100 d-block form-control">
        <p v-if="counter > 10" class="rounded bg-danger p-3 m-3 text-light">¡El valor es alto!</p>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'CounterComposition',
    setup() {
        let counter = ref(0)
        const addCounter = () => { counter.value++ }
        const subCounter = () => { counter.value-- }
        const resetCounter = () => { counter.value = 0 }
        const double = () => { counter.value *= 2 }
        return { counter, addCounter, subCounter, resetCounter, double }
    }
})

</script>
<style></style>
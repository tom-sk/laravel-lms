<script>
export default {
    mixins: [Fieldtype],
    data() {
        return {
            show: false,
        };
    },
    computed: {
        inputType() {
            return this.show ? "text" : "password";
        },
    },
};
</script>

<template>
    <div>
        <text-input :type="inputType" :value="value" @input="updateDebounced" />
        <label><input v-model="show" type="checkbox" /> Show Password</label>
    </div>
</template>

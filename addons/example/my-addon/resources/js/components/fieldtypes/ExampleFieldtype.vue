<script>
// Learn more at https://statamic.dev/extending/fieldtypes/
export default {
    mixins: [Fieldtype],
    data() {
        return {};
    },
};
</script>

<template>
    <div class="example-fieldtype-container">
        This is the example feild type!!!
        <text-input :value="value" @input="update" />
    </div>
</template>

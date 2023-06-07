<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";

import axios from "axios";

const props = defineProps({
    module: {
        type: Object,
    },
    topics: {
        type: Array,
    },
});

function submit() {
    axios.post("/api/attach-topic/" + props.module.id);
}
</script>

<template>
    <Head title="Module" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                {{ module.name }}
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white p-6 shadow-sm sm:rounded-lg"
                >
                    <div class="font-bold text-gray-900">Topics</div>

                    <div v-for="topic in topics" :key="topic.id">
                        {{ topic.name }}
                    </div>
                </div>

                <form @submit.prevent="submit">
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

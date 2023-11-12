<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { RecycleScroller } from 'vue-virtual-scroller';
import { buildFullName, dateDiffDays, formatDate } from '@/main';
import { computed, onMounted, watch, type ComputedRef } from 'vue';
import { type PersonConfig, useMainStore } from '@/stores/main';

const personConfigs: ComputedRef<PersonConfig[]> = computed((): PersonConfig[] => useMainStore().personConfigs);
watch(personConfigs, () => doIt());

onMounted(() => doIt());

const doIt = () => {};
</script>

<template>
    <RecycleScroller v-slot="{ item }" :items="personConfigs" :item-size="24" key-field="id">
        <div class="flex gap-x-3">
            <div class="w-8">{{ item.id }}</div>
            <div class="w-8">{{ item.personId }}</div>
            <div class="w-28">{{ formatDate(item.start) }}</div>
            <div class="w-28">{{ formatDate(item.end) }}</div>
            <div class="w-48">{{ buildFullName(item) }}</div>
            <div class="w-28">{{ dateDiffDays(item.start, item.end) }}</div>
        </div>
    </RecycleScroller>
</template>

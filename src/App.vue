<script setup lang="ts">
import { onMounted } from 'vue';
import { type EventConfig, useMainStore } from '@/stores/main';

onMounted(async () => {
    const url = 'https://api.rows.com/v1beta1/spreadsheets/2KMBzSYr1cv48KDZvWSUY3/tables/2c6898f5-ecef-4b3b-bcb1-8a6d829ff377/values/A1:e999';
    const response = await fetch(url, { method: 'GET', headers: { Authorization: `Bearer ${import.meta.env.VITE_ROWS_API_KEY}`, 'Content-Type': 'application/json' } });
    useMainStore().eventConfigs = response.ok ? buildEventConfigs((await response.json()).items) : [];
    console.log(useMainStore().eventConfigs);
});

const buildEventConfigs = (data: string[][]): EventConfig[] => {
    const eventConfigs: EventConfig[] = [];
    for (const record of data) eventConfigs.push({ id: record[0], start: record[1], firstName: record[2], middleNames: record[3], lastName: record[4] });
    return eventConfigs;
};
</script>

<template>
    <div class="flex h-full flex-col">
        <div class="flex gap-x-3">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/grid">Grid</RouterLink>
            <RouterLink to="/vis">Vis</RouterLink>
        </div>
        <RouterView />
    </div>
</template>

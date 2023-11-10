<script setup lang="ts">
import { onMounted } from 'vue';
import { type PersonConfig, useMainStore } from '@/stores/main';

onMounted(async () => {
    const url = 'https://api.rows.com/v1beta1/spreadsheets/2KMBzSYr1cv48KDZvWSUY3/tables/2c6898f5-ecef-4b3b-bcb1-8a6d829ff377/values/A1:G999';
    const response = await fetch(url, { method: 'GET', headers: { Authorization: `Bearer ${import.meta.env.VITE_ROWS_API_KEY}`, 'Content-Type': 'application/json' } });
    useMainStore().eventConfigs = response.ok ? buildEventConfigs((await response.json()).items) : [];
});

const buildEventConfigs = (data: string[][]): PersonConfig[] => {
    const eventConfigs: PersonConfig[] = [];
    let count = 0;
    for (const record of data.filter((record) => record[1]).sort(comparePeople)) {
        eventConfigs.push({
            id: count++,
            personId: record[0],
            start: record[1],
            end: record[2],
            firstName: record[3],
            middleNames: record[4],
            lastName: record[5]
        });
    }
    return eventConfigs;
};

const comparePeople = (left: string[], right: string[]) => {
    return left[1] < right[1] ? -1 : left[1] > right[1] ? 1 : 0;
};
</script>

<template>
    <div class="flex h-full flex-col">
        <div class="flex gap-x-3">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/grid">Grid</RouterLink>
            <RouterLink to="/vis">Vis</RouterLink>
        </div>
        <div class="h-[calc(100%-24px)]">
            <RouterView />
        </div>
    </div>
</template>

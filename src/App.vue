<script setup lang="ts">
import { dateDiffDays } from '@/main';
import { onMounted } from 'vue';
import { type PersonConfig, useMainStore } from '@/stores/main';

onMounted(async () => {
    const url = 'https://api.rows.com/v1beta1/spreadsheets/2KMBzSYr1cv48KDZvWSUY3/tables/2c6898f5-ecef-4b3b-bcb1-8a6d829ff377/values/A1:G999';
    const response = await fetch(url, { method: 'GET', headers: { Authorization: `Bearer ${import.meta.env.VITE_ROWS_API_KEY}`, 'Content-Type': 'application/json' } });
    response.ok ? buildPersonConfigs((await response.json()).items) : [];
});

const buildPersonConfigs = (data: string[][]): void => {
    let count = 0;
    const personConfigs: PersonConfig[] = [];
    for (const record of data.filter((record) => record[1]).sort(comparePersonConfigs)) {
        personConfigs.push({
            id: count++,
            personId: record[0],
            start: record[1] ? new Date(record[1]) : undefined,
            end: record[2] ? new Date(record[2]) : undefined,
            firstName: record[3],
            middleNames: record[4],
            lastName: record[5]
        });
    }
    const mainStore = useMainStore();
    mainStore.personConfigs = personConfigs;
    if (personConfigs.length === 0) return;

    mainStore.minStartDate = new Date(new Date(mainStore.personConfigs[0].start || '').getFullYear(), 1, 1);
    console.log('eventConfigs', mainStore.personConfigs, mainStore.minStartDate, mainStore.maxEndDate, dateDiffDays(mainStore.minStartDate, mainStore.maxEndDate));
};

const comparePersonConfigs = (left: string[], right: string[]) => {
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

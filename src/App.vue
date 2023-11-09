<script setup lang="ts">
import { onMounted } from 'vue';
import { useMainStore } from '@/stores/main';

onMounted(async () => {
    const url = 'https://api.rows.com/v1beta1/spreadsheets/2KMBzSYr1cv48KDZvWSUY3/tables/2c6898f5-ecef-4b3b-bcb1-8a6d829ff377/values/A1:e999';
    const response = await fetch(url, { method: 'GET', headers: { Authorization: `Bearer ${import.meta.env.VITE_ROWS_API_KEY}`, 'Content-Type': 'application/json' } });
    useMainStore().events = response.ok ? (await response.json()).items : [];
});
</script>

<template>
    <div class="flex flex-col">
        <div class="flex gap-x-3">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/grid">Grid</RouterLink>
            <RouterLink to="/vis">Vis</RouterLink>
        </div>
        <RouterView />
    </div>
</template>

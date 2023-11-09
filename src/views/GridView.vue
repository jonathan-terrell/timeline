<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { RecycleScroller } from 'vue-virtual-scroller';
import { onMounted, shallowRef } from 'vue';

const events = shallowRef([]);

onMounted(async () => {
    const url = 'https://api.rows.com/v1beta1/spreadsheets/2KMBzSYr1cv48KDZvWSUY3/tables/2c6898f5-ecef-4b3b-bcb1-8a6d829ff377/values/A1:e999';
    const response = await fetch(url, { method: 'GET', headers: { Authorization: `Bearer ${import.meta.env.VITE_ROWS_API_KEY}`, 'Content-Type': 'application/json' } });
    events.value = response.ok ? (await response.json()).items : [];
});
</script>

<template>
    <RecycleScroller v-slot="{ item }" :items="events" :item-size="48" key-field="0">
        <div>
            {{ item[0] }}
        </div>
    </RecycleScroller>
</template>

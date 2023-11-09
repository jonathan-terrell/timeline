<script setup lang="ts">
import 'vis-timeline/styles/vis-timeline-graph2d.css';
import { buildFullName } from '@/main';
// import { DataSet } from 'vis-data/peer';
import { Timeline } from 'vis-timeline/peer';
import { useMainStore } from '@/stores/main';
import { onMounted, ref, type ShallowRef, shallowRef } from 'vue';

interface DataItem {
    id: string;
    content: string;
    start: string;
    end?: string;
    type?: string;
}

const container = ref(null);
const eventItems: ShallowRef<DataItem[]> = shallowRef([]);

onMounted(() => {
    // const items = new DataSet([
    //     { id: 1, content: 'item 1', start: '2014-04-20' },
    //     { id: 2, content: 'item 2', start: '2014-04-14' },
    //     { id: 3, content: 'item 3', start: '2014-04-18' },
    //     { id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19' },
    //     { id: 5, content: 'item 5', start: '2014-04-25' },
    //     { id: 6, content: 'item 6', start: '2014-04-27', type: 'point' }
    // ]);
    for (const eventConfig of useMainStore().eventConfigs) {
        eventItems.value.push({ id: eventConfig.id, content: buildFullName(eventConfig), start: eventConfig.start, end: eventConfig.end });
    }
    const options = {};
    new Timeline(container.value!, eventItems.value, options);
});
</script>

<template>
    <div ref="container" class="h-full"></div>
</template>

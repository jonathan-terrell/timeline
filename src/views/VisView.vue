<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { DataSet } from 'vis-data/peer';
import { Timeline } from 'vis-timeline/peer';
const container = ref(null);

onMounted(() => {
    const items = new DataSet([
        { id: 1, content: 'item 1', start: '2014-04-20' },
        { id: 2, content: 'item 2', start: '2014-04-14' },
        { id: 3, content: 'item 3', start: '2014-04-18' },
        { id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19' },
        { id: 5, content: 'item 5', start: '2014-04-25' },
        { id: 6, content: 'item 6', start: '2014-04-27', type: 'point' }
    ]);
    console.log(1111, container.value, items);
    const options = {};
    const timeline = new Timeline(container.value!, items, options);
    console.log(2222, timeline);
});
</script>

<template>
    <div ref="container" class="bg-red-100"></div>
</template>

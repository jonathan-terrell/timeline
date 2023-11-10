<script setup lang="ts">
import 'vis-timeline/styles/vis-timeline-graph2d.css';
import { buildFullName } from '@/main';
import { Timeline } from 'vis-timeline/peer';
import { useMainStore } from '@/stores/main';
import { computed, onMounted, type Ref, ref, type ShallowRef, shallowRef, watch } from 'vue';

interface DataItem {
    id: number;
    content: string;
    start: string;
    end?: string;
    type?: string;
}

const eventConfigs = computed(() => useMainStore().eventConfigs);
watch(eventConfigs, () => buildEvents());
const container: Ref<HTMLElement | null> = ref(null);
const eventItems: ShallowRef<DataItem[]> = shallowRef([]);

onMounted(() => buildEvents());

const buildEvents = () => {
    if (useMainStore().eventConfigs.length === 0) return;
    for (const eventConfig of useMainStore().eventConfigs) {
        eventItems.value.push({
            id: eventConfig.id,
            content: buildFullName(eventConfig),
            start: eventConfig.start || '',
            end: eventConfig.end || undefined
        });
    }
    new Timeline(container.value!, eventItems.value, {
        end: new Date(),
        height: '100%',
        horizontalScroll: true,
        max: new Date(),
        min: '1750-01-01',
        order: comparePeople,
        stack: false,
        verticalScroll: true,
        zoomKey: 'ctrlKey'
    });
};

const comparePeople = (left: DataItem, right: DataItem) => right.id - left.id;
</script>

<template>
    <div ref="container" class="h-full" />
</template>

<style lang="scss" scoped>
.vis-timeline {
    overflow-y: scroll;
}
</style>

<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { buildFullName } from '@/main';
import { RecycleScroller } from 'vue-virtual-scroller';
import { useMainStore } from '@/stores/main';
import { computed, onMounted, watch } from 'vue';

const eventConfigs = computed(() => useMainStore().eventConfigs);
watch(eventConfigs, () => doIt());

onMounted(() => doIt());

const doIt = () => {
    const mainStore = useMainStore();
    if (mainStore.eventConfigs.length === 0) return;
    const startYear = new Date(mainStore.eventConfigs[0].start || '').getFullYear();
    const endYear = new Date().getFullYear() + 1;
    console.log('eventConfigs', mainStore.eventConfigs, startYear, endYear, endYear - startYear);
};
</script>

<template>
    <RecycleScroller v-slot="{ item }" :items="eventConfigs" :item-size="24" key-field="id">
        <div class="flex gap-x-3">
            <div>
                {{ item.id }}
            </div>
            <div>
                {{ item.personId }}
            </div>
            <div>
                {{ item.start }}
            </div>
            <div>
                {{ item.end }}
            </div>
            <div>
                {{ item.typeId }}
            </div>
            <div>
                {{ buildFullName(item) }}
            </div>
        </div>
    </RecycleScroller>
</template>

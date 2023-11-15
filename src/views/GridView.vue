<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { RecycleScroller } from 'vue-virtual-scroller';
import { buildFullName, dateDiffDays } from '@/main';
import { computed, type ComputedRef } from 'vue';
import { type PersonConfig, useMainStore } from '@/stores/main';

const mainStore = useMainStore();
const currentDate = new Date();

const personConfigs: ComputedRef<PersonConfig[]> = computed((): PersonConfig[] => mainStore.personConfigs);
</script>

<template>
    <RecycleScroller v-slot="{ item }" :items="personConfigs" :item-size="28" key-field="id">
        <div class="flex gap-x-1 py-0.5">
            <div class="flex" style="width: 2000px">
                <div :style="{ width: `${(dateDiffDays(mainStore.minStartDate, item.start) / mainStore.maxDurationDays) * 100}%` }" />
                <div
                    class="overflow-x-visible whitespace-nowrap bg-blue-200"
                    :class="item.end ? 'rounded-sm' : 'rounded-bl-sm rounded-tl-sm'"
                    :style="{ width: `${(dateDiffDays(item.start, item.end || currentDate) / mainStore.maxDurationDays) * 100}%` }"
                >
                    <div class="px-1">{{ buildFullName(item) }}</div>
                </div>
            </div>
        </div>
    </RecycleScroller>
</template>

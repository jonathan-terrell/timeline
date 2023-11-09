<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { buildFullName } from '@/main';
import { RecycleScroller } from 'vue-virtual-scroller';
import { useMainStore } from '@/stores/main';
</script>

<template>
    <RecycleScroller v-slot="{ item }" :items="useMainStore().eventConfigs" :item-size="24" key-field="id">
        <div class="flex">
            <div>
                {{ item.start }}
            </div>
            <div>
                {{ item.id }}
            </div>
            <div>
                {{ buildFullName(item) }}
            </div>
        </div>
    </RecycleScroller>
</template>

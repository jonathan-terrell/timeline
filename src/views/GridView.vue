<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { RecycleScroller } from 'vue-virtual-scroller';
import { useMainStore } from '@/stores/main';
</script>

<template>
    <RecycleScroller v-slot="{ item }" :items="useMainStore().events" :item-size="24" key-field="0">
        <div>
            {{ item[0] }}
        </div>
    </RecycleScroller>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ItemCard from "@/components/ItemCard.vue";
export default {
    data(){
        return{}
    },
    components:{
        ItemCard
    },
    computed:{
        ...mapGetters([
            'getUserItems',
            'getUserSelected',
            'getUserSelectedMaxCount',
            'getAvailableSelected',
            'getAvailableItems',
        ]),

    },
    methods:{
        ...mapActions([
            'toggleUserSelected',
            'toggleAvailableSelected',
        ])
    }

}
</script>

<template>
    <div class="app">
        <div class="selected-panels">
            <div class="user-selected">
                <div class="user-selected__items">
                    <item-card v-for="item in getUserSelected" :key="item.id" v-bind="item" />
                </div>
                <div class="user-selected-info">
                    selected: {{getUserSelected.length}}/{{getUserSelectedMaxCount}}
                </div>
                <!-- /.user-selected-info -->
            </div>
            <div class="available-selected">
                <item-card v-if="getAvailableSelected" class="item-card_available" v-bind="getAvailableSelected" />
            </div>
        </div>

        <div class="items-panels">
            <div class="items-list">
                <item-card v-for="item in getUserItems" :key="item.id" v-bind="item" @click="toggleUserSelected(item.id)" />
            </div>
            <div class="items-list">
                <item-card v-for="item in getAvailableItems" :key="item.id" v-bind="item" @click="toggleAvailableSelected(item.id)" />
            </div>
        </div>
    </div>
</template>


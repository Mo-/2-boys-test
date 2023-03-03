<template>
    <!-- не кнопка, чтобы был один компонент для всех случаев -->
<div class="item-card" :class="{'item-card_selected':isSelected}">
    {{$props.name}}
</div>
</template>

<script>
export default {
    name: "ItemCard",
    props: {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        isSelected: {
            type: Boolean,
            default: false
        }
    },
}
</script>

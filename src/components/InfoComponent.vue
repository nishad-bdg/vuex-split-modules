<template>
    <div>
        <h2>Match Details</h2>
        <p v-if = "teamACount > 4">
            {{ matchDate }}
        </p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
    computed:{
        ...mapState({
            matchDate: state => state.info.matchDate,
        }),
        ...mapGetters("info",['teamACount'])
    }
}
</script>
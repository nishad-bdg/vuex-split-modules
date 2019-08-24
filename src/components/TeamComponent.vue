<template>
    <div>
        <h1>Team {{type }}</h1>
        <ul>
            <li v-for = "(member,index) in team" :key = "member.id">
                {{member.name }}
                <v-btn @click="removeFromTeam(type,index,member)">X</v-btn>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['type'],
    computed:{
        team(){
           return this.type === "A"? this.$store.state.teamA : this.$store.state.teamB
        }
    },

    methods:{
        ...mapActions(['removeFromTeam'])
    }
}
</script>
<template>
  <div>
    <h1>Students - total is {{ studentCount}}</h1>
    <center>
      <u>
        <li v-for="(student,index) in students" :key="student.id">
          {{student.name}}
          <i>{{ student.games.length}} games he plays</i>
          &nbsp;
          <v-btn @click="addTeamMember({type:'A', index})" :disabled="student.selected">A</v-btn>&nbsp;
          <v-btn @click="addTeamMember({type:'B', index})" :disabled="student.selected">B</v-btn>&nbsp;
        </li>
      </u>
      <hr />
      <TeamComponent type="A">Team A</TeamComponent>
      <TeamComponent type="B">Team B</TeamComponent>
      <InfoComponent></InfoComponent>
    </center>
  </div>
</template>

<script>
import TeamComponent from "@/components/TeamComponent";
import InfoComponent from '@/components/InfoComponent'
import {mapState,mapActions, mapGetters} from 'vuex';

export default {
  components: { TeamComponent,InfoComponent },
  computed: {
    ...mapState(['students']),
    ...mapGetters(['studentCount'])
  },
  created() {
    this.$store.dispatch("getStudents");
  },

  methods:{
    ...mapActions(['addTeamMember'])
  }
};
</script>
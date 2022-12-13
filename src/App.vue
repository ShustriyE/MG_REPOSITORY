<template>
  <div class="wrapper">
    <div class="sidebar">
    <span>
      <button @click="peopleStore.filterPeopleFilm()">Firter Film</button>
    </span>
    <span>
      <button @click="peopleStore.filterPeopleSpecies()">Firter Species</button>
    </span>
    <span>
      <button @click="peopleStore.filterPeopleStarships()">Firter Starships</button>
    </span>
    </div>
    <div class="maincontent">
      <People v-for="people of peopleStore.people"
      :key="people.name"
      :people="people"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePeopleStore } from './stores/PeopleStore'
import People from './components/People.vue'

const peopleStore = usePeopleStore()
peopleStore.getPeople()

</script>

<style scoped>

</style>

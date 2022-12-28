<template>
  <div class="wrapper">
    <SidebarFilters />
    <div class="maincontent">
      <People v-for="people of peopleStore.people"
      :key="people.name"
      :people="people"/>
    </div>
  </div>
</template>

<script setup>
import People from './components/People.vue'
import SidebarFilters from './components/SidebarFilters.vue'
import { usePeopleStore } from './stores/PeopleStore'

  const peopleStore = usePeopleStore()
  peopleStore.getPeople()
  ? peopleStore.getPeople()
  : []
</script>
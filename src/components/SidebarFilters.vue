<template>
    <div >
        <div class="sidebar">
            <span>
                <button @click="peopleStore.getPeople()">Show All</button>
            </span>
            <span>
                <button @click="peopleStore.filterPeople('film')">Firter Film</button>
            </span>
            <span>
                <button @click="peopleStore.filterPeople('species')">Firter Species</button>
            </span>
            <span>
                <button @click="peopleStore.filterPeople('starships')">Firter Starships</button>
            </span>
        </div>
    </div>
</template>
  
<script setup>
  import { usePeopleStore } from '../stores/PeopleStore'

  const peopleStore = usePeopleStore()
</script>
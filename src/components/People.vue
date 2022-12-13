<template>
    <div class="people">
      <div class="person">
        <p>Name: {{people.name}}</p>
        <p>Films: {{people.films.length > 0 ? people.films : 'None'}}</p>
        <p>Species: {{people.species.length > 0 ? people.species : 'None'}}</p>
        <p>Starships: {{people.starships.length > 0 ? people.starships : 'None'}}</p>
      </div>
    </div>
  </template>
  
  <script setup>
    const props = defineProps({
        people: {
            type: Object,
            required: true,
            default: () => {}
        }
    })
    </script>

import axios from "axios";
import { defineStore } from "pinia";
import { watch } from 'vue'
const URL = 'https://swapi.dev/api/people/'

export const usePeopleStore = defineStore('people', {
    state: () => ({
        people:[]
    }),
    actions: {
        getPeople() {
            return axios.get(URL)
            .then(people => {
                if(people.status === 200){
                    const persons = people.data.results
                    persons.sort((a, b) => a.name.localeCompare(b.name))
                    localStorage.setItem('people', JSON.stringify(persons))
                    this.people = JSON.parse(localStorage.getItem('people'))
                }
            }).catch(er => console.log(er))
        },
        filterPeopleFilm() {
            const people = JSON.parse(localStorage.getItem('people'))
            people.sort((a, b) => b.films.length - a.films.length)
            localStorage.setItem('people', JSON.stringify(people))
            this.people = JSON.parse(localStorage.getItem('people'))            
        },
        filterPeopleSpecies() {
            const people = JSON.parse(localStorage.getItem('people'))
            people.sort((a, b) => b.species.length - a.species.length)
            localStorage.setItem('people', JSON.stringify(people))
            this.people = JSON.parse(localStorage.getItem('people'))    
        },
        filterPeopleStarships() {
            const people = JSON.parse(localStorage.getItem('people'))
            people.sort((a, b) => b.starships.length - a.starships.length)
            localStorage.setItem('people', JSON.stringify(people))
            this.people = JSON.parse(localStorage.getItem('people')) 
        },
    }
})
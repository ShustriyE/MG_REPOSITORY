import { defineStore } from "pinia";
import SwapiPeopleService from '../services/SwapiPeopleService'
const URL = 'https://swapi.dev/api/people/'

export const usePeopleStore = defineStore('people', {
    state: () => ({
        people: null
    }),
    actions: {
        getPeople() {
            const service = new SwapiPeopleService(URL)
            service.getPeople()
            this.people = JSON.parse(localStorage.getItem('people'))
        },
        setPeople(pople) {
            localStorage.setItem('people', JSON.stringify(pople))
            this.people = JSON.parse(localStorage.getItem('people')) 
        },
        filterPeople(el) {
            const result = el === 'film'
            ? this.people.filter(person => person.films.length > 0)
            : el === 'species'
            ? this.people.filter(person => person.species.length > 0)
            : this.people.filter(person => person.starships.length > 0)
            this.setPeople(result) 
        },
    }
})
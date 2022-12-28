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
            let result;
            switch(el) {
                case 'film': 
                result = this.people.filter(person => person.films.length > 0);
                break;
                case 'species':
                result = this.people.filter(person => person.species.length > 0);
                break;
                case 'starships':
                result = this.people.filter(person => person.starships.length > 0);
                break;
                default: break;
            }
            this.setPeople(result) 
        },
    }
})
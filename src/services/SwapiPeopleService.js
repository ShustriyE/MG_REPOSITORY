import axios from "axios";

export default class SwapiPeopleService {
    constructor(url) {
        this.URL = url
    }

    getPeople() {
        return axios.get(this.URL)
        .then(people => {
            if(people.status === 200){
                const persons = people.data.results
                persons.sort((a, b) => a.name.localeCompare(b.name))
                localStorage.setItem('people', JSON.stringify(persons))
            }
        }).catch(er => console.log(er));
    }
}
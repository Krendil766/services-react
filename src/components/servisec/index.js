export default class SwapiService {
 /*  getResourse = async url => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Произошда ошибка ' + res.status)
    }
    return res.json();
}
getPost = () => {
    return this.getResourse(this.url)
} */
 getResource =async (url)=> {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }
  
 /*  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._tranformPerson);
  } */
}

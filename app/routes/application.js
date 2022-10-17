import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch('http://localhost:3007/todos');
    let { data } = await response.json();
    const formated = data.map((todo) => {
      let { attributes, id } = todo;
      return { id, ...attributes };
    });
    console.log(formated);
    return formated;
  }
}

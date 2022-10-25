import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3007';
  urlForCreateRecord() {
    return 'http://localhost:3007/addTodo';
  }
}

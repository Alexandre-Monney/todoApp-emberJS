import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class RentalsComponent extends Component {
  @service store;
  @tracked todoInput = '';

  @action
  focus(element) {
    element.focus();
  }

  @action
  addTodo() {
    this.store
      .createRecord('todo', {
        todo: this.todoInput,
      })
      .save();
    this.todoInput = '';
  }
}

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TodoItemComponent extends Component {
  @service store;
  @tracked isDone = false;

  @action
  async changeStatus(id, done) {
    let todo = this.store.peekRecord('todo', id);
    await todo.set('done', !done);
    await todo.save();
  }

  @action
  deleteTodo(id) {
    let todoToDelete = this.store.peekRecord('todo', id);
    todoToDelete.destroyRecord();
  }
}

import { module, test } from 'qunit';
import { setupTest } from 'todo-app-ember-js/tests/helpers';

module('Unit | Model | add todo', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('add-todo', {});
    assert.ok(model);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'todo-app-ember-js/tests/helpers';

module('Unit | Adapter | add todo', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:add-todo');
    assert.ok(adapter);
  });
});

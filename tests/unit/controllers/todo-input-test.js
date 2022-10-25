import { module, test } from 'qunit';
import { setupTest } from 'todo-app-ember-js/tests/helpers';

module('Unit | Controller | todo-input', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:todo-input');
    assert.ok(controller);
  });
});

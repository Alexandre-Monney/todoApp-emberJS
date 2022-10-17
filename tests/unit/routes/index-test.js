import { module, test } from 'qunit';
import { setupTest } from 'todo-app-ember-js/tests/helpers';

module('Unit | Route | index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });
});

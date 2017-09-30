import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aria-slider', 'Integration | Component | aria slider', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{aria-slider}}`);
  assert.equal(this.$('.aria-widget-slider').length, 1);
});

test('it should have rail element', function(assert) {
  this.render(hbs`{{aria-slider}}`);
  assert.equal(this.$('.rail').length, 1);
});

test('it should have an element with role=slider', function(assert) {
  this.render(hbs`{{aria-slider}}`);
  assert.equal(this.$('[role="slider"]').length, 1);
});

test('it should have an element with tabindex=0', function(assert) {
  this.render(hbs`{{aria-slider}}`);
  assert.equal(this.$('[tabindex="0"]').length, 1);
});

test('it should have a thumb element', function(assert) {
  this.render(hbs`{{aria-slider}}`);
  assert.equal(this.$('.thumb').length, 1);
});

test('it should have an aria-valuemin attribute', function(assert) {
  this.render(hbs`{{aria-slider minValue=0}}`);
  assert.equal(this.$('[aria-valuemin="0"]').length, 1);
});

test('it should have an aria-valuemax attribute', function(assert) {
  this.render(hbs`{{aria-slider maxValue=100}}`);
  assert.equal(this.$('[aria-valuemax="100"]').length, 1);
});

test('it should have an aria-valuenow attribute', function(assert) {
  this.render(hbs`{{aria-slider currentValue=50}}`);
  assert.equal(this.$('[aria-valuenow="50"]').length, 1);
});

test('it should have an aria-labelledby attribute', function(assert) {
  this.render(hbs`{{aria-slider labelledBy="labelHello"}}`);
  assert.equal(this.$('[aria-labelledby="labelHello"]').length, 1);
});

test('it should have a value element', function(assert) {
  this.render(hbs`{{aria-slider}}`);
  assert.equal(this.$('.value').length, 1);
});

test('it should have a value=currentValue', function(assert) {
  this.render(hbs`{{aria-slider currentValue=50}}`);
  assert.equal(this.$('.value').text().trim(), '50');
});

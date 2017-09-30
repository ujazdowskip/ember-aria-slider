import Ember from 'ember';
import toHex from '../utils/to-hex';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  red: 0,
  green: 0,
  blue: 0,
  rgb: computed('red', 'green', 'blue', function() {
    return `${this.get('red')}, ${this.get('green')}, ${this.get('blue')}`;
  }),
  hex: computed('red', 'green', 'blue', function() {
    let red = toHex(this.get('red'));
    let green = toHex(this.get('green'));
    let blue = toHex(this.get('blue'));
    return `#${red}${green}${blue}`;
  })
});
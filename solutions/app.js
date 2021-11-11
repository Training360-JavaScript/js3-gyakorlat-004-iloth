import checkIP from './ip.js';
import checkMac from './mac.js';
import checkVisa from './visa.js';

const checker = {
  rules: [checkIP, checkMac, checkVisa],
  validate(string, rule) {
    const ruleIndex = ['ip', 'mac', 'visa'].indexOf(rule);
    if (ruleIndex >= 0) {
      return this.rules[ruleIndex](string);
    }
  },
};

export default checker;

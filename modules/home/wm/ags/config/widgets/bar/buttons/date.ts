import { clock } from "lib/variables";

export default () => Widget.Label({
  class_name: "time bar-element",
  label: Variable('', {
    poll: [1000, 'date "+%H:%M"']
  }).bind().as(time => `  ${time}`),
});


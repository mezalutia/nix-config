import { clock } from "lib/variables";

export default () => Widget.Label({
  class_name: "time",
  label: Variable('', {
    poll: [1000, 'date "+%H:%M %D"']
  }).bind(),
});


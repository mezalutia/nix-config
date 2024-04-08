import Time from "./buttons/Date";
import Workspaces from "./buttons/Workspaces";

export default (monitor: number = 0) => Widget.Window({
  monitor: monitor,
  class_name: "bar",
  name: `bar${monitor}`, // Name HAS to be unique
  exclusivity : "exclusive",
  anchor: ["top", "left", "right"],
  child: Widget.CenterBox({
    startWidget: Widget.Box({
      children: [
        Workspaces(),
      ],
    }),
    centerWidget: Widget.Box({
      children: [
        Time(),
      ],
    }),
    endWidget: Widget.Box(),
  })
});

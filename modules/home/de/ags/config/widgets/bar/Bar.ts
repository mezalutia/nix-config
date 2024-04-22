import Time from "./buttons/Date";
import Workspaces from "./buttons/Workspaces";

export default (monitor: number = 0) => Widget.Window({
  monitor: monitor,
  class_name: "bar_window",
  name: `bar${monitor}`, // Name HAS to be unique
  exclusivity : "exclusive",
  anchor: ["top", "left", "right"],
  child: Widget.CenterBox({
    class_name: "bar",
    startWidget: Widget.Box({
      hexpand: true,
      vexpand: true,
      children: [
        Workspaces(),
      ],
    }),
    centerWidget: Widget.Box({
      children: [
        Time(),
      ],
    }),
    endWidget: Widget.Box({
      hexpand: true,
      vexpand: true,
    }),
  })
});

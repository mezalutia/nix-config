import Time from "./buttons/date";
import Workspaces from "./buttons/workspaces";
import Systray from "./buttons/systray";
import Volume from "./buttons/volume";

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
      hpack: "start",
      children: [
        Workspaces(),
      ],
    }),
    centerWidget: Widget.Box({
      children: [
      ],
    }),
    endWidget: Widget.Box({
      hexpand: true,
      vexpand: true,
      hpack: "end",
      children: [
        Systray(),
        Volume(),
        Time(),
      ],
    }),
  })
});

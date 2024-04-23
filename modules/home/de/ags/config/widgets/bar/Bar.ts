import Time from "./buttons/Date";
import Workspaces from "./buttons/Workspaces";
import systray from "./buttons/systray";

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
        Widget.Label({
          class_name: "bar-element",
          label: "Masayoshi Soken - Find the Flame"
        }),
      ],
    }),
    endWidget: Widget.Box({
      hexpand: true,
      vexpand: true,
      hpack: "end",
      children: [
        systray(),
        Time(),
      ],
    }),
  })
});

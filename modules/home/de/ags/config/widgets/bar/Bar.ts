import Time from "./buttons/Date";
import Workspaces from "./buttons/Workspaces";

export default (monitor: number = 0) => Widget.Window({
  monitor: monitor,
  class_name: "bar",
  name: `bar${monitor}`,
  exclusivity : "exclusive",
  anchor: ["left", "top", "left"],
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

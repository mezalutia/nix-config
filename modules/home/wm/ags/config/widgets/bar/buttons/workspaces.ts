const Hyprland = await Service.import("hyprland");

const dispatch_ws = (id: string | number) => {
  Hyprland.messageAsync(`dispatch workspace ${id}`);
}

export default () => {
  const workspaces = Hyprland.bind("workspaces")
    .as(ws => ws.map(({ id }) => {
      return Widget.Button({ 
        class_name: "workspace",
        attribute: id,
        on_clicked: () => dispatch_ws(id), 
        // child: Widget.Label(`${id}`),
        setup: (self) => {
          self.hook(Hyprland.active.workspace, () => self.toggleClassName("active", Hyprland.active.workspace.id == id));
        },
      })
    }));

    return Widget.Box({
      class_name: "workspaces bar-element",
      children: workspaces,
    });
};

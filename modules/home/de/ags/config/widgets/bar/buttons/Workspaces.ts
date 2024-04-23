const hyprland = await Service.import("hyprland");

const dispatch_ws = (id: string | number) => {
  hyprland.messageAsync(`dispatch workspace ${id}`);
}

export default () => {
  const workspaces = hyprland.bind("workspaces")
    .as(ws => ws.map(({ id }) => {
      return Widget.Button({ 
        class_name: "workspace",
        attribute: id,
        on_clicked: () => dispatch_ws(id), 
        // child: Widget.Label(`${id}`),
        setup: (self) => {
          self.hook(hyprland.active.workspace, () => self.toggleClassName("active", hyprland.active.workspace.id == id));
        },
      })
    }));

    return Widget.Box({
      class_name: "workspaces bar-element",
      children: workspaces,
    });
};

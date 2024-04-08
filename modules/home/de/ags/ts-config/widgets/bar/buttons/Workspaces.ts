const hyprland = await Service.import("hyprland");

const dispatch_ws = (id: string | number) => {
  hyprland.messageAsync(`dispatch workspace ${id}`);
}

export default () => {
  const activeId = hyprland.active.workspace.bind("id"); // Get the id of the active workspace
  const workspaces = hyprland.bind("workspaces")
    .as(ws => ws.map ( ({ id }) => Widget.Button({ // Make a button for each workspace
      on_clicked: () => dispatch_ws(id), // If clicked, switch to the workspace corresponding to this button
      child: Widget.Label(`${id}`),
      class_name: activeId.as(active => `${active === id ? "focused" : ""}`), // If the active workspace changes, check if the id corresponding to this button matches (styling purposes)
    })));

    return Widget.Box({
      class_name: "workspaces",
      children: workspaces,
    });
};

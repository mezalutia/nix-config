const hyprland = await Service.import("hyprland")
const notifications = await Service.import("notifications")
const mpris = await Service.import("mpris")

const date = Variable('', {
  poll: [1000, 'date "+%H:%M %D"'],
})

function Clock() {
  return Widget.Label({
    label: date.bind()
  })
}

function ClientTitle() {
  return Widget.Label({
    class_name: "client-title",
    label: hyprland.active.client.bind("title"),
  })
}

function Workspaces() {
  const activeId = hyprland.active.workspace.bind("id")
  const workspaces = hyprland.bind("workspaces")
    .as(ws => ws.map( ({ id }) => Widget.Button({
      on_clicked: () => hyprland.messageAsync(`dispatch workspace ${id}`),
      child: Widget.Label(`${id}`),
      class_name: activeId.as(active => `${active === id ? "focused" : "" }`)
    })))

  return Widget.Box({
    class_name: "workspace",
    children: workspaces,
  })
}

function Center() {
  return Widget.Box({
    children: [
      Clock()
    ]
  })
}

function Left() {
  return Widget.Box({
    children: [
      Workspaces(),
      ClientTitle(),
    ]
  })
}

function Bar(monitor = 0) { 
  return Widget.Window({
    name: `bar-${monitor}`,
    anchor: ['top', 'left', 'right'],
    exclusivity: "exclusive",
    child: Widget.CenterBox({
      start_widget: Left(),
      center_widget: Center(),
    })
  })
}

App.config({
    windows: [
        Bar()
    ]
})

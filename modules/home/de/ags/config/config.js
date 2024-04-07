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
    .as(ws => ws.map( ({ id }) ),
}

function Center() {
  return Widget.Box({
    children: [
      Clock()
    ]
  })
}

function Bar(monitor = 0) { 
  return Widget.Window({
    name: `bar-${monitor}`,
    anchor: ['top', 'left', 'right'],
    exclusivity: "exclusive",
    child: Widget.CenterBox({
      center_widget: Center()
    })
  })
}

App.config({
    windows: [
        Bar()
    ]
})

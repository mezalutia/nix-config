import "style/style"
import Bar from "widgets/bar/bar";
import { applauncher as AppLauncher } from "widgets/applauncher/applauncher";
import { NotificationPopups } from "widgets/notification/notification"

Utils.timeout(100, () => Utils.notify({
    summary: "Notification Popup Example",
    iconName: "info-symbolic",
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing "
        + "minim sint cillum sint consectetur cupidatat.",
    actions: {
        "Cool": () => print("pressed Cool"),
    },
}))

App.config({
    windows: [
      Bar(),
      AppLauncher,
      NotificationPopups(),
    ]
});

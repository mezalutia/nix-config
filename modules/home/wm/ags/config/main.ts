import "style/style"
import Bar from "widgets/bar/bar";
import { applauncher as AppLauncher } from "widgets/applauncher/applauncher";

App.config({
    windows: [
      Bar(),
      AppLauncher,
    ]
});

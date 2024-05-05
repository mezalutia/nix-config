const Applications = await Service.import("applications");
const Audio = await Service.import("audio");
const Battery = await Service.import("battery");
const greetd = await Service.import("greetd");
const Hyprland = await Service.import("hyprland");
const mpris = await Service.import("audio");
const Network = await Service.import("network");
const Notifications = await Service.import("notifications");
const PowerProfiles = await Service.import("powerprofiles");
const Systray = await Service.import("systemtray");

export {
  Applications,
  Audio,
  Battery,
  greetd,
  Hyprland,
  mpris,
  Network,
  Notifications,
  PowerProfiles,
  Systray
}
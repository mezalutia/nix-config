const Audio = await Service.import("audio");

export default () => {
  const icon = Widget.Label({
    label: "",
  });

  const slider = Widget.Slider({
    hexpand: true,
    draw_value: false,
    on_change: ({ value }) => Audio.speaker.volume = value,
    setup: self => self.hook(Audio.speaker, () => {
      self.value = Audio.speaker.volume || 0
    }),
  });

  return Widget.Box({
    class_name: "volume bar-element",
    children: [icon, slider],
  });
};

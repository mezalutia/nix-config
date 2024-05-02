const audio = await Service.import("audio");

export default () => {
  const icon = Widget.Label({
    label: "",
  });

  const slider = Widget.Slider({
    hexpand: true,
    draw_value: false,
    on_change: ({ value }) => audio.speaker.volume = value,
    setup: self => self.hook(audio.speaker, () => {
      self.value = audio.speaker.volume || 0
    }),
  });

  return Widget.Box({
    class_name: "volume bar-element",
    children: [icon, slider],
  });
};

{ inputs, ... }: {
  imports = [
    ./wm/hypr/hyprland
    ./wm/hypr/hyprlock
    ./wm/wlogout
    ./wm/ags

    ./programs/nautilus
    ./programs/kitty
    ./programs/git
    ./programs/firefox
    ./programs/vscode
    ./programs/nixvim
    ./programs/vesktop
    ./programs/wezterm
  ];
}

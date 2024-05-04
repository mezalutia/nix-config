{ inputs, ... }: {
  imports = [
    ./wm/hypr/hyprland
    ./wm/hypr/hyprlock
    ./wm/wlogout
    ./wm/rofi
    ./wm/ags
    # ./wm/waybar

    ./programs/nautilus
    ./programs/kitty
    ./programs/git
    ./programs/firefox
    ./programs/vscode
    ./programs/nixvim
    ./programs/vesktop
  ];
}

{ inputs, ... }: {
  imports = [
    ./wm/hypr/hyprland
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

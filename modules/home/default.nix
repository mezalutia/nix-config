{ inputs, ... }: {
  imports = [
    ./de/hyprland
    ./de/rofi
    ./de/ags
    # ./de/waybar

    ./programs/nautilus
    ./programs/kitty
    ./programs/git
    ./programs/firefox
    ./programs/vscode
    ./programs/nixvim
  ];
}

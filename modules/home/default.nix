{ inputs, ... }: {
  imports = [
    ./wm/hypr/hyprland
    ./wm/hypr/hyprlock
    ./wm/wlogout
    ./wm/ags
    ./wm/wl-clipboard

    ./programs/nautilus
    ./programs/kitty
    ./programs/git
    ./programs/firefox
    ./programs/vscode
    ./programs/nixvim
    ./programs/vesktop
    ./programs/wezterm
    ./programs/fish
    ./programs/starship
    # ./programs/transcribe
    ./programs/yt-dlp
    # ./programs/flameshot
  ];
}

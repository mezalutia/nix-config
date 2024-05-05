{ pkgs, ... }: {
  programs.waybar = with pkgs; {
    enable = true;
    #style = builtins.readFile ./style.css;
  };

  xdg.configFile."waybar/config".source = ./config.jsonc;
}

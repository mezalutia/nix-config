{ inputs, pkgs, ... }:
{
  # add the home manager module
  imports = [ inputs.hypridle.homeManagerModules.default ];

  programs.hypridle = {
    enable = true;
  };

  xdg.configFile."hypr/hypridle.conf".source = ./hypridle.conf;
}
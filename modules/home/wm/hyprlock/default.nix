{ inputs, pkgs, ... }:
{
  # add the home manager module
  imports = [ inputs.hyprlock.homeManagerModules.default ];

  programs.hyprlock = {
    enable = true;
  };
}

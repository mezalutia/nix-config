{ config, pkgs, inputs, myvars, ... }:

{
  imports = [
    ../../modules/home
  ];

  # Home Manager needs a bit of information about you and the
  # paths it should manage.
  home.username = myvars.username;
  home.homeDirectory = "/home/${myvars.username}";
  home.packages = with pkgs; [
    networkmanagerapplet
    (nerdfonts.override { fonts = [ "JetBrainsMono" "Iosevka" ]; })
  ];
  
  fonts.fontconfig.enable = true;

  # This value determines the Home Manager release that your
  # configuration is compatible with. This helps avoid breakage
  # when a new Home Manager release introduces backwards
  # incompatible changes.
  #
  # You can update Home Manager without changing this value. See
  # the Home Manager release notes for a list of state version
  # changes in each release.
  home.stateVersion = "23.11";

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}

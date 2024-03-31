{ config, pkgs, inputs, ... }:
let 
  hostName = "desktop";
in {
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix

      ../../modules/nixos/base
      ../../modules/nixos/desktop
    ];

  nix.settings.experimental-features = [ "nix-command" "flakes" ];

  networking = {
    inherit hostName;
    networkManager.enable = true;
  };

  services.xserver = {
    enable = true;
    layout = "us";
    xkbVariant = "";
  }

  users.users = {
    alutiamez = {
      isNormalUser = true;
      description = "alutiamez";
      extraGroups = [ "networkmanager" "wheel" ];
      packages = with pkgs; [];
    };
  };

  home-manager = {
    extraSpecialArgs = { inherit inputs; };
    users = {
      "alutiamez" = import ../home.nix;
    };
    useGlobalPkgs = true;
  };

  # Enable automatic login for the user.
  # services.getty.autologinUser = "alutiamez";

  # Allow unfree packages
  nixpkgs.config.allowUnfree = true;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "23.11"; # Did you read the comment?
}
{
  description = "Nixos config flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    nixvim = {
        url = "github:nix-community/nixvim";  
        inputs.nixpkgs.follows = "nixpkgs";
    }; 

    hyprlock.url = "github:hyprwm/hyprlock";
    hypridle.url = "github:hyprwm/hypridle";
    ags.url = "github:Aylur/ags";
    matugen.url = "github:InioX/matugen";
  };

  outputs = { self, nixpkgs, ... }@inputs: {
    nixosConfigurations = {
      system = "x86_64-linux";
      default = nixpkgs.lib.nixosSystem {
        specialArgs = { inherit inputs; };
        modules = [
          ./hosts/aporia
          inputs.home-manager.nixosModules.default
        ];
      };
    };
  };
}

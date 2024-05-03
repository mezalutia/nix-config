{ pkgs, ... }:
{
    programs.steam.enable = true;
    programs.steam.gamescopeSession.enable = true;
    programs.gamemode.enable = true;

    home.packages = with pkgs; [
      mangohud
    ];
}
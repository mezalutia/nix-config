{ pkgs, ... }:
{
  home.packages = with pkgs; [
    transcribe
  ];
}

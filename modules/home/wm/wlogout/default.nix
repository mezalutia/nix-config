{ pkgs, ... }: {
  programs.wlogout = {
    enable = true;
    layout = builtins.fromJSON (builtins.readFile ./layout);
  };
}

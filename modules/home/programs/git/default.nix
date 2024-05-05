{pkgs, myvars, ...}: {
  programs.git = {
    enable = true;
    userName  = myvars.username;
    userEmail = myvars.gitEmail;
    extraConfig = {
    };
  };
}

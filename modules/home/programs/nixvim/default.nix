{ inputs, pkgs, ... }:
{
  # add the home manager module
  imports = [ inputs.nixvim.homeManagerModules.nixvim ];

  programs.nixvim = {
    enable = true;

    colorschemes.gruvbox.enable = true;

    plugins = {
      neo-tree.enable = true;
      telescope.enable = true;
      treesitter.enable = true;
      lualine.enable = true;

      lsp = {
        enable = true;
        servers = {
          tsserver.enable = true;
          lua-ls.enable = true;
        };
      };
    };

    opts = {
      relativenumber = true;
      number = true;
      tabstop = 2;
      shiftwidth = 2;
      expandtab = true;
      autoindent = true;
      ignorecase = true;
      smartcase = true;
      cursorline = true;
    };
  };
}

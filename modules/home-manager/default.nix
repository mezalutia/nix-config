{...}: {
    imports = [
        # Terminal
        ./kitty.nix

        # Browser
        ./firefox.nix

        # Code editor
        ./vscode.nix

        ./git.nix
    ];
}
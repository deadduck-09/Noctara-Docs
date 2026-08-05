# Requirements

Before installing **Noctara Dots**, it is recommended to have a few things prepared to get the best experience.

Noctara Dots is designed around a complete desktop setup, which means the configurations are created for a specific set of applications and tools.

The installer can automatically install missing dependencies, but having the recommended applications installed beforehand is preferred because it ensures that all configurations are available immediately and makes restoring or modifying your setup easier in the future.

---

## Recommended Setup

For the best experience, it is recommended to start with:

- A working **Arch Linux** installation
- A **Wayland compositor**

  - Niri
  - Hyprland
  - Mango

- An active internet connection
- `sudo` access

---

## Recommended Applications

The installer will install these if they are missing, but having them already installed is recommended:

- Noctalia Shell
- Kitty
- Waybar
- MPD
- MPV
- Fastfetch
- Yazi
- rmpc
- Neovim

```bash
yay -S --needed btop cava fastfetch fish hyprland kitty mango mpd mpv niri-git noctalia-git neovim rmpc yazi starship waybar
```

These applications have preconfigured settings included in Noctara Dots.

Keeping the full application set installed means:

- Every configuration can be applied correctly
- Restoring your setup is easier
- You get the complete Noctara experience instead of only parts of it

---

## A Note About Existing Configurations

If you already have custom configurations for these applications, the installer will create a backup before replacing anything.

Your old configurations will be stored safely, allowing you to restore them later if needed.

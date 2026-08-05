# Project Structure

The project structure looks like this:

```text
Noctara-Dots
├── assets/
├── configs/
├── home/
├── local/
├── Pictures/
├── install.sh
├── README.md
└── LICENSE
```

---

# Directory Overview

## `assets/`

Contains images used throughout the project and documentation.

Examples include:

- Desktop previews
- Setup screenshots
- Resource images

These files are only used for documentation and are **not** installed on your system.

---

## `configs/`

Every application's configuration is stored here before being copied to your system during installation.

```text
configs/
├── btop/
├── cava/
├── fastfetch/
├── fish/
├── hypr/
├── kitty/
├── mango/
├── mpd/
├── mpv/
├── niri/
├── noctalia/
├── nvim/
├── rmpc/
├── starship.toml
└── yazi/
```

During installation, these configurations are copied to:

```text
~/.config/
```

---

## `home/`

Contains files that are placed directly into your home directory (`~/`).

This is mainly used for shell-related configuration files such as:

- `.zshrc`
- `.p10k.zsh`

---

## `local/`

Contains files that belong inside:

```text
~/.local/
```

These include the icon packs (YAMIS) and Noctalia v5 resources used by the setup.

---

## `Pictures/`

Contains wallpapers, icons, and other image assets used by the desktop.

During installation, these files are copied into:

```text
~/Pictures/
```

---

# Editing

Each application has its own dedicated folder so configurations stay clean and easy to navigate.

If you want to customize a specific application, simply open its corresponding folder inside `configs/`.

| Application | Configuration   |
| ----------- | --------------- |
| Kitty       | `configs/kitty` |
| Niri        | `configs/niri`  |
| Hyprland    | `configs/hypr`  |
| MangoWM     | `configs/mango` |
| Neovim      | `configs/nvim`  |

---

# Window Managers

Explore the configuration guide for each supported window manager.

<div class="wm-grid">
  <a href="/configuration/window-managers/niri" class="wm-card">
    <div class="title">Niri</div>
    <div class="desc">Scrollable tiling window manager configuration.</div>
  </a>

  <a href="/configuration/window-managers/hyprland" class="wm-card">
    <div class="title">Hyprland</div>
    <div class="desc">Dynamic Wayland compositor configuration.</div>
  </a>

  <a href="/configuration/window-managers/mango" class="wm-card">
    <div class="title">MangoWM</div>
    <div class="desc">MangoWM configuration and customization.</div>
  </a>
</div>

<style scoped>
.wm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin-top: 20px;
}

.wm-card {
  display: block;
  padding: 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none !important;
  transition: all .2s ease;
}

.wm-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-elv);
  transform: translateY(-2px);
}

.wm-card .title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
}

.wm-card .desc {
  color: var(--vp-c-text-2);
  font-size: .9rem;
  line-height: 1.5;
}
</style>

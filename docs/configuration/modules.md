# Modules

Besides the window manager, Noctara Dots also includes configurations for several terminal and desktop applications. Every application's configuration is stored inside the `configs/` directory, making it easy to customize each one independently.

---

# Fastfetch

**Location**

```text
configs/fastfetch/
```

Fastfetch is used to display system information in the terminal.

Noctara includes multiple ASCII art presets instead of just one, so feel free to experiment and pick the one you like best.

Available presets include:

- `arch.txt`
- `cirno.txt`
- `woah.txt`

Simply edit `config.jsonc` if you want to switch between them or create your own.

---

# Kitty

**Location**

```text
configs/kitty/
```

Kitty comes pre-configured to match the Noctara color scheme.

If you'd like to try something different, a backup color theme is also included.

```text
themes/
├── noctalia.conf
└── mocha.conf
```

Simply change the `current-theme.conf` symlink (or point it to another theme) to switch between them.

---

# Neovim

**Location**

```text
configs/nvim/
```

A complete Neovim configuration with plugins, LSP support, Treesitter, and theming is included.

If you already have your own Neovim setup, feel free to merge only the parts you want.

---

# Yazi

**Location**

```text
configs/yazi/
```

Includes a custom theme, keybindings, and flavors to match the rest of Noctara.

---

# MPV

**Location**

```text
configs/mpv/
```

Contains the MPV configuration along with useful scripts, fonts, and script options for a better media experience.

---

# btop

**Location**

```text
configs/btop/
```

A customized resource monitor theme that matches the overall Noctara aesthetic.

---

# Cava

**Location**

```text
configs/cava/
```

Includes a themed audio visualizer along with custom shaders and color presets.

---

# MPD & RMPC

**Location**

```text
configs/mpd/
configs/rmpc/
```

These provide a complete terminal music setup.

- **MPD** handles music playback.
- **RMPC** provides the terminal interface and theme.

---

# Noctalia

**Location**

```text
configs/noctalia/
```

Contains user templates and plugins used by Noctalia Shell.

Most users won't need to modify anything here unless they're customizing the shell itself.

---

# Fish

**Location**

```text
configs/fish/
```

The Fish configuration includes aliases, functions, and integrations used throughout Noctara.

If you chose the Fish installation during setup, this configuration will be installed automatically.

---

# Starship

**Location**

```text
configs/starship.toml
```

Configures the Starship prompt used by Fish.

Feel free to customize the prompt however you like.

---

These are the same assets used throughout the project and documentation, but you're free to replace them with your own.

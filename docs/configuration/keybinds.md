# Keybinds

Noctara Dots ships with my personal application shortcuts and keyboard layout.

I tried to keep the keybinds simple, consistent, and easy to remember, but everyone has a different workflow. Feel free to change both the keybindings and the applications they launch to better match your setup.

---

# Noctalia Keybinds

These shortcuts control the **Noctalia Shell**.

| Keybind                                          | Action                      |
| ------------------------------------------------ | --------------------------- |
| <kbd>Super</kbd> + <kbd>L</kbd>                  | Lock the current session    |
| <kbd>Super</kbd> + <kbd>,</kbd>                  | Toggle Wallpaper Panel      |
| <kbd>Super</kbd> + <kbd>.</kbd>                  | Toggle Emoji Launcher       |
| <kbd>Super</kbd> + <kbd>V</kbd>                  | Toggle Clipboard History    |
| <kbd>Super</kbd> + <kbd>D</kbd>                  | Toggle Control Center       |
| <kbd>Alt</kbd> + <kbd>Space</kbd>                | Toggle Application Launcher |
| <kbd>Super</kbd> + <kbd>N</kbd>                  | Open Notifications          |
| <kbd>Super</kbd> + <kbd>Escape</kbd>             | Open Session Menu           |
| <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd> | Toggle Noctalia Settings    |
| <kbd>Alt</kbd> + <kbd>Tab</kbd>                  | Open Window Switcher        |

---

# Default Application Shortcuts

These are the default applications included with Noctara Dots.

| Keybind                         | Application    |
| ------------------------------- | -------------- |
| <kbd>Super</kbd> + <kbd>T</kbd> | Kitty          |
| <kbd>Super</kbd> + <kbd>B</kbd> | Helium Browser |
| <kbd>Super</kbd> + <kbd>E</kbd> | Thunar         |
| <kbd>Super</kbd> + <kbd>M</kbd> | Spotify        |
| <kbd>Super</kbd> + <kbd>O</kbd> | Obsidian       |
| <kbd>Super</kbd> + <kbd>C</kbd> | VSCodium       |

---

# Niri

Changing application shortcuts in Niri is very straightforward.

Most application launches follow this format:

```kdl
<KEYBIND> hotkey-overlay-title="Window Title" { spawn "application"; }
```

Example:

```kdl
Super+T hotkey-overlay-title="Open a Terminal: Kitty" { spawn "kitty"; }
```

Simply replace the keybind or the application name with whatever you prefer.

---

# Hyprland

> [!TIP]
> If you like the default keybindings but simply want to change the applications they launch, you only need to edit the variables below.

```lua
---------------------
---- MY PROGRAMS ----
---------------------

local terminal    = "kitty"
local fileManager = "thunar"
local mainMod     = "SUPER"
local browser     = "helium-browser"
local players     = "spotify"
local notes       = "obsidian"
local editor      = "vscodium"
```

Once you update these variables, every keybind that uses them will automatically use your preferred applications.

Most keybindings follow a simple format similar to:

```lua
hl.bind("<KEYBIND>", hl.dsp.exec_cmd("<APPLICATION>"))
```

Example:

```lua
hl.bind("SUPER,T", hl.dsp.exec_cmd(terminal))
```

This keeps the configuration clean since you only need to update the variables instead of editing every individual keybind.

---

# MangoWM

> [!NOTE]
> MangoWM support is still evolving, and I'm still learning the compositor myself.
>
> Because of that, the current configuration mainly includes the Noctalia shortcuts and common application launchers. More advanced keybindings and workflow improvements will be added over time.

Application keybindings follow a simple format:

```conf
bind=<KEYBIND>,spawn,<APPLICATION>
```

Example:

```conf
bind=SUPER,T,spawn,kitty
```

Simply replace the key combination or the application name with whatever you want to use.

As MangoWM matures, this section will continue to grow with additional shortcuts and workflow improvements.

# Hyprland

For most users, only a few files need to be changed after installation. The sections below cover the most common ones.

---

# Main Configuration

The `hyprland.lua` file is the entry point for the entire Hyprland configuration. It loads all of the modules used by Noctara Dots.

```lua
---------------
--- MODULES ---
---------------

-- Core (It's recommended to check these files and adjust them for your hardware)
require("modules.input")        -- Mouse and input devices
require("modules.monitors")     -- Monitors and output devices
require("modules.env")          -- Environment variables

-- Startups
require("modules.autostarts")

-- Appearance
require("modules.animations")
require("modules.decorations")  -- Blur and gap settings
require("modules.layer-rules")  -- Shell rules

-- Behavior
require("modules.keybinds")     -- Change them to your preferred applications
require("modules.layout")       -- Tiling layout
require("modules.window-rules") -- Window behavior

-- Misc
require("modules.misc")         -- Wallpapers and logo

-- Apply Noctalia color templates
require("noctalia").apply_theme()
```

Unlike the Niri configuration, the Hyprland setup is **fully modular**, including the layout configuration. This allows every part of the configuration to be edited independently without any known issues.

---

# Monitor Configuration

The monitor configuration is located in:

```text
modules/monitors.lua
```

This is usually the **first file you should edit** after installation.

Update the monitor name, resolution, refresh rate, scaling, and position to match your hardware.

Example:

```lua
hl.monitor({
	output = "eDP-1", -- Your main display
	mode = "1366x768@60.004", -- Make sure it matches your secreen resolution
	position = "0x0",
	scale = 1,
	transform = 0,
})
```

For multiple monitors, simply add additional monitor entries.

If you're unsure about your monitor name or supported resolutions, you can check them using:

```bash
hyprctl monitors
```

---

# Environment Variables

Environment variables are configured in:

```text
modules/env.lua
```

This file controls things like your cursor theme, cursor size, and other desktop environment variables.

Example:

```lua
hl.env("XCURSOR_THEME", "Bibata-Modern-Classic") -- Make sure you have this installed
hl.env("XCURSOR_SIZE", "24")
hl.env("HYPRCURSOR_SIZE", "24")
hl.env("GTK_CURSOR_THEME", "Bibata-Modern-Classic")
```

> [!TIP]
> Make sure the cursor theme you choose is actually installed on your system.
>
> Noctara Dots uses **Bibata Modern Classic** by default, but you can replace it with any cursor theme you prefer by simply changing the theme name.

---

# Laptop Lid Behavior

Laptop lid actions are configured inside:

```text
modules/keybinds.lua
```

By default, Noctara Dots can lock the session and suspend the system whenever the laptop lid is closed.

Example:

```lua
hl.bind(
	"switch:on:Lid Switch",
	hl.dsp.exec_cmd("noctalia msg session lock-and-suspend"),
	{ locked = true } -- 'locked = true' is equivalent to 'bindl'
)
```

This provides a nice laptop experience by automatically:

- 🔒 Locking the current session
- 😴 Suspending the laptop

> [!WARNING]
> If this doesn't work correctly, your system's login manager may already be handling lid events before Hyprland receives them.

You may need to edit your `logind.conf` and set:

```ini
HandleLidSwitch=ignore
HandleLidSwitchExternalPower=ignore
```

> [!NOTE]
> The configuration file is usually located at:
>
> - `/etc/systemd/logind.conf`
> - `/etc/elogind/logind.conf`
>
> If you can't find it, run:
>
> ```bash
> find / -name "logind.conf" 2>/dev/null
> ```
>
> After making changes, restart the login manager or simply reboot your system.

---

That's all you should need to change for a typical installation.

# Niri

For most users, only a few files need to be changed after installation. The sections below cover the most common ones.

---

# Main Configuration

The `config.kdl` file is the entry point for the entire Niri configuration. It loads all of the modules used by Noctara Dots.

```kdl
//===================\\
//      MODULES      \\
//===================\\

// Core (It's recommended to check these files and adjust them for your hardware)
include "./modules/input.kdl"        // Mouse and input devices
include "./modules/monitors.kdl"     // Monitors and output devices
include "./modules/env.kdl"          // Environment variables

// Startup
include "./modules/autostarts.kdl"

// Appearance
include "./modules/animations.kdl"
include "./modules/decorations.kdl"  // Blur behavior
include "./modules/layer-rules.kdl"  // Shell rules

// Behavior
include "./modules/keybinds.kdl"      // Change them to your preferred applications
include "./modules/window-rules.kdl"  // Window behavior
```

> [!NOTE]
> Keep the **layout section** inside `config.kdl`.
>
> Moving it into a separate module currently causes border rendering and theme issues when using **Noctalia Shell**.
>
> If you are **not** using Noctalia Shell, you are free to move it into its own module.

---

# Monitor Configuration

The monitor configuration is located in:

```text
modules/monitors.kdl
```

This is usually the **first file you should edit** after installation.

Update the monitor name, resolution, refresh rate, scaling, rotation, and position to match your hardware.

Example:

```kdl
output "eDP-1" {
    // Uncomment to disable this output
    // off

    mode "1366x768@60.004"

    // Can use integer or fractional scale
    scale 1

    // normal, 90, 180, 270,
    // flipped, flipped-90, flipped-180 and flipped-270.
    transform "normal"

    position x=0 y=0
}
```

If you're unsure about your monitor name or supported resolutions, you can check them using:

```bash
niri msg outputs
```

---

# Environment Variables

Environment variables are configured in:

```text
modules/env.kdl
```

This file controls things like your cursor theme, cursor size, and other desktop environment variables.

Example:

```kdl
environment {
    QT_QPA_PLATFORMTHEME "qt6ct"

    XCURSOR_THEME "Bibata-Modern-Classic"
    XCURSOR_SIZE "24"

    GTK_CURSOR_THEME "Bibata-Modern-Classic"
}

cursor {
    xcursor-theme "Bibata-Modern-Classic"
    xcursor-size 24
}
```

> [!TIP]
> Make sure the cursor theme you choose is actually installed on your system.
>
> Noctara Dots uses **Bibata Modern Classic** by default, but you can replace it with any cursor theme you prefer by simply changing the theme name.

---

# Laptop Lid Behavior

Laptop lid actions are configured inside:

```text
modules/env.kdl
```

By default, Noctara Dots can lock the session and suspend the system whenever the laptop lid is closed.

Example:

```kdl
switch-events {
    lid-close {
        spawn "noctalia" "msg" "session" "lock-and-suspend"
    }
}
```

This provides a nice laptop experience by automatically:

- 🔒 Locking the current session
- 😴 Suspending the laptop

> [!WARNING]
> If this doesn't work correctly, your system's login manager may already be handling lid events before Niri receives them.

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

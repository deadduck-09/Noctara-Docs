# MangoWM

> [!IMPORTANT]
> **MangoWM configs are still getting refined.**
>
> I'm currently learning MangoWM myself, so this configuration should be considered a **solid starting point** rather than a polished desktop experience.
>
> Most of the core configuration is already modular, but things like layouts, optimizations, and some MangoWM-specific features still need more work. You may need to tweak parts of the configuration to better suit your workflow.
>
> As I continue learning MangoWM, this configuration will be updated and improved over time.

---

For most users, only a few files need to be changed after installation.

---

# Main Configuration

The `config.conf` file is the entry point for the entire MangoWM configuration. It loads all of the modules used by Noctara Dots.

```conf
# ============================================
#               MODULES
# ============================================

source=./modules/animations.conf
source=./modules/autostarts.conf
source=./modules/decorations.conf
source=./modules/env.conf
source=./modules/input.conf
source=./modules/keybinds.conf
source=./modules/layout.conf
source=./modules/misc.conf
source=./modules/monitors.conf
source=./modules/tag.conf
source=./modules/window-rules.conf

source=~/.config/mango/noctalia.conf
```

Like the Hyprland configuration, the MangoWM setup is modular, allowing each part of the configuration to be edited independently.

---

# Monitor Configuration

The monitor configuration is located in:

```text
modules/monitors.conf
```

This is usually the **first file you should edit** after installation.

Update the monitor name, resolution, refresh rate, scaling, and position to match your hardware.

Example:

```conf
monitorrule=name:^eDP-1$,width:1366,height:768,refresh:60.004,x:0,y:0,scale:1,rr:0
```

---

# Environment Variables

Environment variables are configured in:

```text
modules/env.conf
```

This file controls things like your cursor theme, cursor size, and other desktop environment variables.

Example:

```conf
# Cursor Theme and Size
cursor_theme=Bibata-Modern-Classic
cursor_size=24
```

> [!TIP]
> Make sure the cursor theme you choose is actually installed on your system.
>
> Noctara Dots uses **Bibata Modern Classic** by default, but you can replace it with any cursor theme you prefer by changing the theme name.

---

# Laptop Lid Behavior

Laptop lid actions are configured inside:

```text
modules/env.conf
```

You can configure MangoWM to lock your session and suspend the laptop whenever the lid is closed.

Example:

```conf
# Lid Switch Handling
# Triggers the locking and suspending script via noctalia on lid close
switchbind=fold,spawn,noctalia msg session lock-and-suspend
switchbind=unfold,spawn,wlr-dpms on
```

> [!WARNING]
> If this doesn't work correctly, your system's login manager may already be handling lid events before MangoWM receives them.

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

As MangoWM support matures, this page will expand with more configuration options, optimizations, and customization guides.

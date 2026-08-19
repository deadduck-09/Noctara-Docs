# Focus Mode

Noctara Dots includes a custom **Focus Mode** built specifically for this setup.

Focus Mode is designed to remove as many distractions as possible and give you a cleaner, more minimal desktop when you want to concentrate. Instead of changing your normal configuration permanently, it can be toggled on and off whenever you need it.

Use:

```text
Super + Alt + F
```

to toggle Focus Mode.

<p align="center">
  <img src="../public/images/focus-mode.png" alt="Noctara Focus Mode" width="100%">
</p>

> [!WARNING]
> **Focus Mode currently only supports the Niri configuration.**
>
> Support for other window managers is still being worked on and will be added in a future update. For now, the Focus Mode setup, keybind, visual changes, and website blocking are designed specifically for **Niri**.

---

## What Focus Mode Does

When enabled, Focus Mode changes Niri into a much simpler workspace by:

- Disabling Niri animations
- Removing blur
- Removing transparency effects
- Removing shadows
- Reducing border sizes
- Reducing gaps to give you more usable screen space
- Disabling overview wallpaper blur
- Stopping wallpaper rotation

The idea is simple: **less visual distraction, more screen space, fewer excuses for staring at your wallpaper instead of doing something productive.** 🌿

---

## Focus Mode Files

The Focus Mode files are located inside:

```text
~/.config/niri/
├── bin
│   ├── apply-hosts.sh
│   ├── blocklist.txt
│   ├── focus.kdl
│   ├── focus-rules.kdl
│   ├── hosts.template
│   └── toggle-focus.sh
```

### `toggle-focus.sh`

This is the main script responsible for enabling and disabling Focus Mode.

It handles the overall switching process, including applying the Focus Mode configuration, managing wallpapers, stopping wallpaper rotation, and restoring your normal setup when Focus Mode is turned off.

If you want to use a different Focus Mode wallpaper, edit the wallpaper file path inside:

```text
~/.config/niri/bin/toggle-focus.sh
```

---

### `focus-rules.kdl`

This is the main file to edit if you want to customize how Focus Mode looks.

Want even smaller gaps? Different borders? Want to disable or keep a particular visual effect?

Make those changes inside:

```text
~/.config/niri/bin/focus-rules.kdl
```

This lets you customize Focus Mode without having to dig through the main Niri configuration.

---

# Website Blocking

Focus Mode also goes a step further by blocking distracting websites while it is enabled.

The included blocklist can be used to block sites such as:

- Instagram
- Reddit
- Other distracting websites you add yourself

The list is stored in:

```text
~/.config/niri/bin/blocklist.txt
```

To add or remove a website, simply edit this file.

For example:

```text
instagram.com
www.instagram.com
reddit.com
www.reddit.com
```

Add the domains you want to block and remove the ones you don't.

> [!WARNING]
> Website blocking requires a small one-time setup because Focus Mode temporarily modifies `/etc/hosts`, which is a protected system file. The steps below are required for website blocking to work properly.

---

# Configure Passwordless Host Swapping

Because `/etc/hosts` is protected, `apply-hosts.sh` needs permission to run through `sudo` without asking for your password every time Focus Mode is toggled.

This permission is limited to **only the Focus Mode host-swapping script**.

### 1. Open the sudoers file

Run the following command and replace `nano` with your preferred editor if needed:

```bash
sudo EDITOR=nano visudo -f /etc/sudoers.d/niri-focus
```

### 2. Add your permission rule

Add the following line:

```text
YOUR_USERNAME ALL=(ALL) NOPASSWD: /home/YOUR_USERNAME/.config/niri/bin/apply-hosts.sh
```

Replace both instances of:

```text
YOUR_USERNAME
```

with your actual Linux username.

For example, if your username is `gigi`:

```text
gigi ALL=(ALL) NOPASSWD: /home/gigi/.config/niri/bin/apply-hosts.sh
```

Save the file and exit your editor.

### 3. Set the correct permissions

Run:

```bash
sudo chown root:root /etc/sudoers.d/niri-focus
sudo chmod 0440 /etc/sudoers.d/niri-focus
```

### 4. Verify the setup

Run:

```bash
sudo ~/.config/niri/bin/apply-hosts.sh disable
```

If everything is configured correctly, the command should complete **without asking for your password**.

Once this is working, Focus Mode can enable and disable website blocking automatically when you toggle it.

> [!NOTE]
> The passwordless permission above only applies to `apply-hosts.sh`. It does **not** give passwordless sudo access to other commands.

---

# Disable Secure DNS

For website blocking through `/etc/hosts` to work reliably, your browser should not bypass your system's DNS settings using **Secure DNS** or **DNS over HTTPS**.

Open your browser:

**Settings → Search for "Secure DNS" or "DNS over HTTPS" → Set it to Off or Default Protection**

The exact wording depends on the browser.

> [!WARNING]
> If Secure DNS or DNS over HTTPS is enabled, some blocked websites may bypass the Focus Mode blocklist.

---

## Customizing the Blocklist

Whenever you want to add another distracting site, open:

```text
~/.config/niri/bin/blocklist.txt
```

and add its domain.

For example:

```text
instagram.com
www.instagram.com
reddit.com
www.reddit.com
youtube.com
www.youtube.com
```

You can remove any entry whenever you no longer want that website blocked.

The next time Focus Mode is enabled, the updated blocklist will be used.

That's it. Press **Super + Alt + F** when it's time to focus, and press it again when you're done.

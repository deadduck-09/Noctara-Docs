# Updating Noctara Dots

Noctara Dots is continuously improved with new features, fixes, and configuration updates.

When a new update is available, updating your setup is simple.

---

## If You Already Have Noctara Dots Installed

If you still have the cloned Noctara Dots repository on your system, go to the repository folder:

```bash
cd Noctara-Dots
```

Pull the latest changes:

```bash
git pull
```

After the latest changes are downloaded, run the installer again:

```bash
./install.sh
```

The installer will update the required configurations while keeping your setup organized.

---

## If You Removed The Repository

If the Noctara Dots folder is no longer on your system, simply clone it again:

```bash
git clone https://github.com/deadduck-09/Noctara-Dots.git
```

Enter the folder:

```bash
cd Noctara-Dots
```

Run the installer:

```bash
./install.sh
```

---

## Before Updating

It is recommended to keep your custom changes backed up before applying updates.

The installer automatically creates backups before replacing configurations, so you can safely update and restore your previous setup if needed.

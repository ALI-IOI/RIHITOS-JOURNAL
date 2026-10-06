# Rihito's Journal (private)

## ▶ Open it

| Where | Link |
|---|---|
| Website from this repo | [ali-ioi.github.io/RIHITOS-JOURNAL](https://ali-ioi.github.io/RIHITOS-JOURNAL/) (goes live once GitHub Pages is switched on, which needs GitHub Pro, free with the Student Developer Pack) |
| On this computer | Open `index.html` in this folder (`D:\RIHITO\GITHUB\RIHITOS-JOURNAL\index.html`) |
| Public template demo | [ali-ioi.github.io/RIHITOS-JOURNAL-TEMPLATE](https://ali-ioi.github.io/RIHITOS-JOURNAL-TEMPLATE/) |

My Flight Path 2029 tracker: Arduino → ESP32 → ROS 2 → drones → a research Masters.
Built on the same app as the public RIHITOS-JOURNAL-TEMPLATE; only `data/journal.js` differs.

- Open `index.html`, or the GitHub Pages site for this repo.
- Progress syncs between my devices through a private Gist: **Console → Sync** (see `docs/SYNC.md`).
- Change dates, targets and items in **Console**, or edit `data/journal.js`.
- `python tools/build.py --cdn` makes the single-file version used for the artifact version.

Pull app updates from the template:

```
git remote add template https://github.com/ALI-IOI/RIHITOS-JOURNAL-TEMPLATE.git   # once
git fetch template
git merge template/main      # data/journal.js is mine; keep my version if it conflicts
```

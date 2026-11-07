# Rihito's Journal

## ▶ Open it

| Where | Link |
|---|---|
| **Live site** | [ali-ioi.github.io/RIHITOS-JOURNAL](https://ali-ioi.github.io/RIHITOS-JOURNAL/) |
| On this computer | Open `index.html` in this folder (`E:\RIHITO\GITHUB\RIHITOS-JOURNAL\index.html`) |

My Flight Path 2029 tracker: Arduino → ESP32 → ROS 2 → drones → a research Masters.
Built on the same app as Rihito's Journal IOI (RIHITOS-JOURNAL-IOI, private); only `data/journal.js` differs.

- Open `index.html`, or the GitHub Pages site for this repo.
- On phones and tablets a lighter mode switches on by itself (no blur, lighter 3D background), so it stays smooth.
- Progress syncs between my devices through a private Gist: **Console → Sync** (see `docs/SYNC.md`).
- Change dates, targets and items in **Console**, or edit `data/journal.js`.
- `python tools/build.py --cdn` makes the single-file version used for the artifact version.

Pull app updates from Rihito's Journal IOI:

```
git remote add ioi https://github.com/ALI-IOI/RIHITOS-JOURNAL-IOI.git   # once
git fetch ioi
git merge ioi/main      # data/journal.js is mine; keep my version if it conflicts
```

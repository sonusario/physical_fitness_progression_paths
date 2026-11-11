# Physical Fitness Progression Paths

**Live:** [https://sonusario.github.io/physical_fitness_progression_paths/](https://sonusario.github.io/physical_fitness_progression_paths/)

A training calculator that plans your way toward an elite level in endurance, strength and power, without adding mass you don't need. You enter your sport, conditioning, injuries and body stats. It works out your progression paths and main training loops, and rebuilds them whenever an input changes.

It is a single-file progressive web app with no build step, and it works offline. Everything you enter stays in your browser.

## Inputs

- **Athlete type.** 18 presets, from marathoner, cyclist, swimmer, triathlete, rower and Nordic skier to sprinter, jumper, thrower, field, court, combat, climber, hybrid racer, tactical and all-round. Each preset sets:
  - the balance of endurance, strength and power, which you can change with sliders;
  - the main endurance mode;
  - the hard-session types;
  - the power drills;
  - the prehab that suits the sport.
- **Body.** Sex, age, height, weight, optional body fat and heart rates, daily activity, and units (metric or imperial).
- **Conditioning.** Your training age, plus your latest test results. These include a 5 km run, bike FTP, 400 m swim, 2 km erg, 30-15 IFT, squat and trap-bar 1RM, pull-ups, push-ups, single-leg squats, broad jump, CMJ, 20 m sprint, calf raises, side plank and single-leg bridge. Results set your stage on each path, or you can set a stage yourself.
- **Injuries and weak areas.** 12 regions, each marked as fine, weak, recovering or painful now, with a rehab phase for recovering areas.
- **Split abs (diastasis recti).** Gap width, timing (including postpartum), doming on effort and pelvic floor symptoms. These place you in one of three phases (Reconnect, Rebuild, Reload), swap out planks, rollouts and hollow holds until you are ready for them, and switch to low-impact work where needed.
- **Schedule.** Training days, session length, whether two sessions a day are possible, usual start time, wake time, sleep target, meals a day, equipment and pull-up bar, eating style, and the plan start date.
- **Quick starts.** Fill several of these at once (new to training, returning, busy, committed, full-time, masters).

## Layout

The app fits on one screen and does not scroll the page. Six tabs sit along the bottom on a phone and along the top on a desktop, and each has a few sub-tabs.

A first visit opens **Setup** with the athlete type and quick start. Every later visit opens **Today**, because that is what you usually want to glance at.

## What it gives you

- **Today.** The session for today as a short outline. Tap a part to open it, and an exercise for how to do it.
  - One tap says how you feel (Ready, So-so, Rough), and the session stays as planned, gets lighter, or turns into recovery. A fuller check-in (sleep, soreness, energy, stress, resting heart rate, illness, new pain) is one tap away.
  - Four tiles show today's fuel, tonight's sleep window, your stages and the week. Each opens the matching tab.
- **Week.** One day at a time, with a day bar to move around.
  - Weeks 1 to 3 of each block build. Week 4 unloads and holds the gate tests.
  - Overview lists the whole week and lets you swap days.
  - Muscles checks that every major muscle group gets work.
  - Export downloads sessions as routine files for [IntervalTimer](https://sonusario.github.io/IntervalTimer/) (Settings → Import routines). Timed steps cover warm-ups, intervals and rests, sets of reps wait for a tap, and easier versions come along as variants.
- **Paths.**
  - Railroad: a directed graph of the four lines (Endurance, Strength, Power, Resilience), six stations each, from You to Elite. Diamonds are gate tests. Dashed arrows show that each Power station needs the Strength and Resilience station before it. Rehab paths are sidings that rejoin the Resilience line. Tap a station for its focus and gate.
  - Stages: the focus, gate and usual time for each stage.
  - Gates: test protocols and adjusted targets that stand in for competitions. Logging a result updates your stage and the whole plan.
  - Loops: the daily, weekly, block and stage loops drawn as rings.
- **Fuel.**
  - Day: calories, carbohydrate, protein, fat and fluid, scaled to that day's training, with meal times around your sessions.
  - Meal plan: real meals with portions, built from popular foods to match the day's targets. Pick an eating style (everyday omnivore, Mediterranean, high protein, vegetarian, vegan, budget, quick, dairy-free, gluten-free) and shuffle for other options.
  - Macros: what carbohydrate, protein, fat, fibre and fluid each do, how much, when, and which foods.
  - Micros: twelve vitamins and minerals athletes run short on, with your target, best foods, absorption tips, and a flag where your sport, sex or diet raises the risk.
  - Supplements: the few with good evidence.
- **Recover.** Your sleep window, the recovery built into the plan, recovery methods ranked by evidence, injury and split abs remediation with a pain-monitoring rule, and warning signs.
- **Setup.** Athlete, body, conditioning, injuries, split abs, schedule and data, with a one-line summary of the plan that updates as you change things.

## How the plan is built

- Strength work stays heavy, with low reps, long rests and reps in reserve. This builds strength with little gain in size. Moderate reps for size are only added if you ask for muscle and your sport benefits from it.
- Endurance follows a polarized pattern, with most time easy and a small amount at threshold and VO2max. Team, court and combat sports get intermittent, repeated-sprint or round-based conditioning.
- Power uses plyometrics, throws, sprints and Olympic-style pulls. Contacts are counted, and every rep is done at full intent.
- Resilience work is chosen for each sport and backed by injury-prevention research. Examples include Nordic curls for hamstrings, Copenhagen planks for the groin, calf and tibialis work for runners, and rotator cuff work for overhead sports.
- Exercises that strain an injured area are swapped for safe alternatives. While an impact injury is painful, running is replaced by another mode.
- Targets are adjusted for sex, for age after 35, and for how much your sport relies on each quality.

This is an educational planner, not medical advice. Get a professional assessment for pain, a recent injury, or a heart or health condition before hard training.

## Files

- `index.html`: the whole app.
- `sw.js`: the service worker, for offline use and update notices.
- `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png`: install metadata and icons.

Part of [Sonusario's Selects](https://sonusario.github.io/).

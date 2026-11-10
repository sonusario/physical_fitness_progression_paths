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
- **Schedule.** Training days, session length, whether two sessions a day are possible, usual start time, wake time, sleep target, meals a day, equipment and pull-up bar, and the plan start date.
- **Quick starts.** Fill several of these at once (new to training, returning, busy, committed, full-time, masters).

## What it gives you

- **Paths.** Six stages for each quality (Endurance, Strength, Power, Resilience), from Foundation to Elite. Each stage shows:
  - the focus of the stage;
  - the gate test to move up;
  - how long that usually takes.

  Injuries get a phased rehab path with return criteria. The main loops are drawn as rings: the daily check-in, train, fuel and sleep loop; the hard and easy week; the 4-week block; and stage → gate → stage.
- **Week.** A full week of sessions, with exercises, sets, reps, effort (RPE and reps in reserve), rests, heart-rate zones and easier or harder versions.
  - Weeks 1 to 3 of each block build. Week 4 unloads and holds the gate tests.
  - You can swap days, and the week rebuilds when you change available days.
  - A coverage table checks that every major muscle group gets work.
- **Today.** A readiness check-in covering sleep, soreness, energy, stress, resting heart rate, illness and new pain. It keeps today's session as planned, makes it lighter, or turns it into recovery.
- **Fuel.** Calories, carbohydrate, protein, fat and fluid for each day, scaled to that day's training. You also get a flexible meal schedule around your sessions, fueling during long sessions, a check for low energy availability, and supplements with good evidence.
- **Recover.** Your sleep window, the recovery built into the plan, recovery methods ranked by evidence, injury remediation with a pain-monitoring rule, and warning signs.
- **Gates.** Test protocols and adjusted targets that stand in for competitions. Logging a result updates your stage and the whole plan.
- **Export.** Download sessions as IntervalTimer routine files, then import them in [IntervalTimer](https://sonusario.github.io/IntervalTimer/) under Settings → Import routines.
  - Timed steps cover warm-ups, intervals and rests.
  - Sets of reps wait for a tap.
  - Easier versions of strength exercises come along as IntervalTimer variants.

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

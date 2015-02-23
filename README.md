# cli-countdown

Counts down a number of seconds before exiting.
This is useful as an alternative to `read`, to give users a chance to exit multi-part shell scripts.

```
npm install -g cli-countdown
```

## Usage

```bash
echo Doing interesting things...
echo Now about to delete some files
countdown -m "Deleting files in" -s 10
rm foo.txt
```

Which displays

![screenshot](screenshot.gif)

- If the timer runs to the end, the exit code will be `0`
- If the user interrupts with `Ctrl-C` (`SIGINT`), the exit code will be `1`

If you want `Ctrl-C` to abort the current shell script completely, you will probably want to use

- `set -e` at the top of your script
- or `countdown <args> || exit 1`

## Arguments

- `countdown -s 10`: timer duration in seconds (default 10)
- `countdown -m "message"`: message to display (default none)
- `countdown --help`: display command usage

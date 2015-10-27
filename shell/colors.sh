#!/usr/bin/env bash

# COLORS
red=$(tput setaf 1)
green=$(tput setaf 2)
yellow=$(tput setaf 3)
blue=$(tput setaf 4)
purple=$(tput setaf 5)
cyan=$(tput setaf 6)
white=$(tput setaf 7)
reset=$(tput sgr0)

# SUCCESS OUTPUT
success() {
cat <<"EOT"
                                                   _      _
                                                  | |    | |
 ___ _   _ _ __   ___     ___ ___  _ __ ___  _ __ | | ___| |_ ___
/ __| | | | '_ \ / __|   / __/ _ \| '_ ` _ \| '_ \| |/ _ \ __/ _ \
\__ \ |_| | | | | (__   | (__ (_) | | | | | | |_) | |  __/ |_  __/
|___/\__, |_| |_|\___|   \___\___/|_| |_| |_| .__/|_|\___|\__\___|
     __/  |                                 | |
     |___/                                  |_|
EOT
}

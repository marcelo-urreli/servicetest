#!/bin/bash

REPO=${PWD};
VRS="v4.2.1";
NVM_DIR="$HOME/.nvm";
NODE_MODULES="../node_modules";

if [ "${PWD##*/}" != "scripts" ]
then
    cd "scripts";
fi

if [ ! -d "$NODE_MODULES" ] || [ ! -d "$NVM_DIR" ]
then
    ./install.sh
fi

while getopts ":t:m" o; do
    case "${o}" in
        t)
            TASK=${OPTARG}
            ;;
        m)
            MSG=${OPTARG}
            ;;
    esac
done

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

echo;
echo $MSG;

nvm exec $VRS $TASK;

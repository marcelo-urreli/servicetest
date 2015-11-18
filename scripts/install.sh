#!/bin/bash

echo "INSTALLING Servis Test";

REPO=${PWD};
VRS="v4.2.1";
NVM_DIR="$HOME/.nvm";
NODE_MODULES="node_modules";

if [ "${PWD##*/}" != "scripts" ]
then
    cd "scripts";
fi

SCRIPTS=${PWD};

if [ ! -d "$NVM_DIR" ]
then
    echo;
    echo "INSTALLING NVM";
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
fi

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh";  # This loads nvm

if [ ! "$(nvm ls $VRS | grep $VRS)" ]
then
    echo;
    echo "INSTALLING NODE.JS";
    nvm install $VRS;
fi

echo;
echo "INSTALLING NODE MODULES";
cd $REPO;
if [ -d "$NODE_MODULES" ]
then
    rm -rf $NODE_MODULES
fi
nvm exec $VRS npm install

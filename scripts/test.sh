          #!/bin/bash

BASE="./base.sh";
CMD="test";
REPORTER="spec";

if [ "${PWD##*/}" != "scripts" ]
then
    cd "scripts";
fi

while getopts ":t:r:" o; do
    case "${o}" in
        t)
            TEST=${OPTARG}
            ;;
        r)
            REPORTER=${OPTARG}
            ;;
    esac
done

case "$TEST" in
    i)
        CMD="test-integration"
        ;;
esac

$BASE -t "grunt $CMD -reporter=$REPORTER" -m "TESTING Servis Test";

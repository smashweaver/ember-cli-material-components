# sudo chmod 755 material.sh

echo "Repackaging material components..."

mv brocfile brocfile.js

rm -rf dist tmp addon/components/-material

broccoli build addon/components/-material

mv brocfile.js brocfile

clear

echo "Done repackaging material components."
# get all the differnt terrain types
cat planets.json | jq --raw-output  .[].fields.terrain | string split ',' | string trim | sort | uniq

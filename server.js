/*pseudocode
Create node app for taking a string and returning the WAZE syntax

create react components for taking input and serving it to node

return links that can be copied and serve them to the front end

use petsitter as a template??

https://developers.google.com/waze/deeplinks/

*/

const space="%20"
const wazeBase="https://waze.com/ul?q="
const navigateYes="&navigate=yes"
let query

let command = process.argv.slice(2);
process.argv[2]?createQuery(command):console.log("you must input an address");
function createQuery(command){
let join = command.join(' ').replace(/,/g, "")
let query= join.replace(/ /g, "%20");
console.log(wazeBase+query+navigateYes)
pbcopy(wazeBase+query+navigateYes)
return query;
};

function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write(data); proc.stdin.end();
}






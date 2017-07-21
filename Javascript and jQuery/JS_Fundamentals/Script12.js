var utilities = {
    printAllMembers : function (targetObject) {
        for (i in targetObject) {
            document.write("<br/>" +i +" ==> "+ targetObject[i]);
        }
    }
};


var planet = {
    id : 34,
    name : "Monster",
    creature: {
        creatureId : 1,
        name : "human",
        notification : function (){
            document.write("Destroy others for self benefit");
        }
    },
    
    cities : [
        {locationId : 32, name : "Monstorm"},
        {locationId : 34, name : "hidimbasur", specility : "found asurs"}
    ]
};

utilities.printAllMembers(planet);
document.writeln("<br/>");
planet.creature.notification();
document.writeln("<br/>")
utilities.printAllMembers(planet.cities[1]);
//What is garbage collection in V8 (mark-and-sweep)?

//V8 uses garbage collection to free unused memory. It marks all reachable objects starting from roots like globals. 
// Objects not marked are considered unused. 
// These objects are then removed from memory. 
// This process runs automatically in the background
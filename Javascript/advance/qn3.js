//What is event delegation and why does it matter?

//Event delegation means attaching one event listener to a parent instead of many children. 
// Events bubble up to the parent element. This reduces memory usage and improves performance. 
// It also works well for dynamic elements. This is common in large lists.

Example: Listen to a <ul> instead of each <li>.
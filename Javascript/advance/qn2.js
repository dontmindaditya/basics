//How do you prevent expensive reflows and repaints?

//Expensive reflows and repaints are reduced by batching DOM updates instead of applying changes one by one. 
// Layout reads and writes are kept separate to avoid forced reflows. 
// Repeated style changes inside loops are avoided because they trigger unnecessary recalculations. For animations, CSS transforms and opacity are preferred since they do not affect layout. 
// These practices help keep rendering fast and smooth.
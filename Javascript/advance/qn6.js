//What are “deopts” and what causes them?


//Deoptimization happens when optimized code becomes invalid. 
// This usually occurs when variable types change unexpectedly. 
// Adding properties to objects dynamically can trigger it. 
// Using mixed types in arrays also causes deopts. Writing consistent code helps avoid this.
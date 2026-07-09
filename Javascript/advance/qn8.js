//What causes memory leaks in JS apps? How do you detect them?

// Memory leaks happen when objects are kept in memory longer than needed. 
// Common causes are global variables, forgotten timers, and event listeners not removed. 
// Detached DOM nodes can also leak memory. 
// You can detect leaks using browser DevTools memory snapshots. 
// Growing memory over time is a red flag.
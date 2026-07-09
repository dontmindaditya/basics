//How would you design a concurrency limiter for async tasks?

//A concurrency limiter controls how many promises run at the same time.
//  Only a fixed number of async tasks are allowed to execute, 
// while extra tasks wait in a queue. When one task finishes,
// the next task from the queue is started. This approach prevents API overload and browser performance issues.
//  A simple queue-based design keeps execution predictable and stable
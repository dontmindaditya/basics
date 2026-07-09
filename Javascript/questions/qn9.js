//Explain WeakSet in javascript.

//In javascript, a Set is a collection of unique and ordered elements. Just like Set, WeakSet is also a collection of unique and ordered elements with some key differences:

    //Weakset contains only objects and no other type.
    //An object inside the weakset is referenced weakly. This means, that if the object inside the weakset does not have a reference, it will be garbage collected.
    //Unlike Set, WeakSet only has three methods, add() , delete() and has() .

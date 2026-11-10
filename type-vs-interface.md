### type alias VS interface

1. Any object related work is defined by interface. On the other hand,  the rest (primitives, tuples, unions, literals) with object is defined by type alias.  For examples,
type id =number;
type Role = "admin" | "number"
these primitives and union is not possible using interface.

2. We can extend interface by using extends key word but using type it is not possible.
3. We can not redeclare any type it will give error(duplicate identifier error). But we can redeclare interface. If we redeclare multiple interface with the same name TypeScript will automatically combine their properties. For example, 
   interface IEmployee{
    name: string;
   }
   interface IEmployee{
    id: number;
   }

   const employee: IEmployee={
    id: 13,
    name: "Sultana"
   }

### When Should we use one over another
 
 1. We should choose interface for defining structure of objects. Especially when we need to extend and merge them later.

 2. We should choose type alias for defining unions, primitives, tuples, literal types, or more complex type combinations and when we need nested types.

 
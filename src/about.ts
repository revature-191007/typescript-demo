/** 
    What is TypeScript?
    TypeScript is a superset of JavaScript. All valid JavaScript is also
    valid TypeScript.

    The primary feature of TypeScript is to bring static typing to JavaScript.
    In basic JavaScript, types are associated with values and NOT variables.
    In TypeScript, we have the option to declare typing to a variable and
    TypeScript will enforce these type restriction at the compilation level.

    What does 'compilation' mean in the context of TypeScript?
        Browsers don't understand TypeScript. We can't run a TypeScript file
        in the browser. Browsers understand JavaScript. Compilation of 
        TypeScript is the process of converting the TypeScript file to a
        JavaScript file. This process is also called "Transpiling"

    Because of the compilation process, TypeScript also often leverages 
        several other tools used to the advantage of developers.
        * polyfills - A transformative function which converts a newer 
        syntax to an older syntax, such that developers can provide a 
        single version consistent implementation using modern language
        features, without sacrificing the market share of the user base.
        Use newer features! Don't shrink potential userbase!

    Generics - Allows us to generically type arrays and other collections.

    Access to newer JS features before they're ever released.
    When new features are defined for JavaScript, they often are released
    in TypeScript first, which gives the community a good way to test it
    in an isolated environment. This means sometime we get access features
    long before anyone in the JS community.

    By having static typing, IDEs and other toolsets can better infer 
    information about our code. That means better property suggestions,
    better error reporting, better warnings, and all around better tool
    support.

    Cost is we have to compile. And we have to type.

    TypeScript allows us to create interfaces!

    TypeScript supports access modifiers and the static
    keyword.
*/
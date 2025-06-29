// Imediately invoke function Expressions(IIFE)

(function chai() { // named IIFE
    console.log(`DB Connected`);
})();

// We use IIFE in order to avoid the global scope pollution like variables, declarations etc

((name) => { // simple IIFE
    console.log(`DB Connected ${name}`);
})('Daksh')
// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`)
}) ();                    //semicolon is required to stop the execution

( () => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO`)
}) ();


( (name) => {
    //IIFE with operator
    console.log(`DB CONNECTED THREE ${name}`)
}) ('Satyajit');

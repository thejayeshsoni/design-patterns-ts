/**
 * There can only be one president of a country at a time.
 * The same president has to be brought to action, whenever duty calls.
 * President here is singleton.
 */
// Ensures that only one object of a particular class is ever created.

/**
 * In javascript, singletons can be implemented using the module pattern.
 * Private variables and functions are hidden in a function closure, and public methods are selectively exposed.
 */
const president = (function () {
  const presidentsPrivateInformation = "Super private";
  const name = "Dr. APJ Abdul Kalam";
  const getName = () => name;
  return {
    getName,
  };
})();

/**
 * Here, presidentsPrivateInformation and name are kept private.
 * However, name can be accessed with the exposed president.getName method.
 */
console.log(president.getName()); // Outputs 'Turd Sandwich'
console.log(president.name); // Outputs undefined
console.log(president.presidentsPrivateInformation); // Outputs undefined

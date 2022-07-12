export const handleOnChangeData = (e, functionValue, setFunction, prop) => {
    var currentValues = functionValue;
    currentValues[prop] = e.target.value;
    setFunction(currentValues);
};
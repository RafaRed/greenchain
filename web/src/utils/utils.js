export const handleOnChangeData = (e, functionValue, setFunction, prop) => {
    var currentValues = functionValue;
    currentValues[prop] = e.target.value;
    setFunction(currentValues);
};

export function getBase64(file) {
    return new Promise((resolve, reject)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result) 
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    });
   
 }
 
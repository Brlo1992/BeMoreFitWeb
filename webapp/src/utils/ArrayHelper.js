export default class ArrayHelper {

    first = (array) => {
        if (this.isArray(array) && this.noEmpty(array))
            return array[0];
        else
            return undefined;
    }

    isArray = (array) => {
        return Array.isArray(array);
    }

    isValidArray = (array) => {
        return array && this.isArray(array)
    }

    noEmpty = (array) => {
        if (this.isValidArray(array))
            return array.length > 0 ? true : false;
        return false;
    }

    copyArray = (array) => {
        if (array && this.isArray(array)) {
            let newArray = [];
            for (const element of array) {
                newArray.push(element);
            }
            return newArray;
        }
        return undefined;
    }

    // min = (array) => {
    //     if (array && this.isArray(array)) {
    //         let minValue = array[0];
    //         for (const date in array)
    //             if (date > minValue)
    //                 minValue = date
    //         return minValue;
    //     }
    //     return undefined
    // }

    minThan = (array, than) => {
        if (array && this.isArray(array)) {
            let thanValue = than.getTime();
            let minValue = undefined;
            for (let index = 0; index < array.length; index++) {
                if (array[index] > thanValue) {
                    if (!minValue) {
                        minValue = array[index]
                    }
                    else if (array[index] < minValue) {
                        minValue = array[index];
                    }
                }
            }

            return minValue;
        }
        return undefined
    }
}
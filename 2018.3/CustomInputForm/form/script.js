/*global window */

/**
 * @param {Node} submit - The handler to the Submit button
 * @returns {boolean}
 */
function SubmitValues(submit) {
    'use strict';
    /** @param {Node} element */
    function extractValue(element) {
        // TODO extend to handle things like check-boxes
        return element.value;
    }
    /** @param {Node} submit */
    function getAllFormValues(submit) {
        var i;
        /** @type {Array.<Node>|NodeList} */
        var elements;
        /** @type {Node} */
        var element;
        /** @type {GenericValue} */
        var value;
        /** @type {Node} */
        var form = submit.parentNode;
        /** @type {Object.<GenericValue>} */
        var output = {};

        // Assuming the container is a FORM
        if (form.nodeName === 'FORM') {
            elements = form.childNodes;
            for (i = 0; i < elements.length; i += 1) {
                element = elements[i];
                value = extractValue(element);
                if (element.name !== undefined && element.name.length > 0 && value !== undefined) {
                    output[element.name] = value;
                }
            }
        }
        return JSON.stringify(output);
    }
    window.external.setResult(getAllFormValues(submit));
    return true;
}

/**
 * @typedef {string|boolean|number} GenericValue
 */

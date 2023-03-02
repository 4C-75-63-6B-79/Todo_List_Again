function makeElement({elementType = "div", id, classNames, textContent, title, dataAttributeName, dataAttributeValue, events, callBackFunctions, attributesAndValues}) {
    const element = document.createElement(`${elementType}`);
    if(id) {
        element.setAttribute("id", id);
    }
    if(classNames) {
        classNames.split(" ").forEach(eleClass => element.classList.add(eleClass));
    }
    element.textContent = textContent || "";
    if(title) {
        element.setAttribute("title", title);
    }
    if(dataAttributeName) {
        element.setAttribute(`data-${dataAttributeName}`, "");
    }
    if(dataAttributeValue && dataAttributeName) {
        element.setAttribute(`data-${dataAttributeName}`, dataAttributeValue);
    }
    if(Array.isArray(events) && Array.isArray(callBackFunctions) && events.length === callBackFunctions.length) {
        events.forEach((event, i) => element.addEventListener(event, callBackFunctions[i]));
    }
    if(attributesAndValues) {
        const attributes = Object.keys(attributesAndValues);
        attributes.forEach((key) => {
            element.setAttribute(key, attributesAndValues[key]);
        });
    }
    return element;
}

function makeButton({id, classNames, textContent, title, dataAttributeName, dataAttributeValue, event, callBackFunction, attributesAndValues}) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    if(id) {
        button.setAttribute("id", id);
    }
    if(classNames) {
        classNames.split(" ").forEach(eleClass => button.classList.add(eleClass));
    }
    button.textContent = `${textContent}` || "";
    if(title) {
        button.setAttribute("title", title);
    }
    if(dataAttributeName) {
        button.setAttribute(`data-${dataAttributeName}`, "");
    }
    if(dataAttributeValue && dataAttributeName) {
        button.setAttribute(`data-${dataAttributeName}`, dataAttributeValue);
    }
    if(callBackFunction && event) {
        callBackFunction.forEach(eleFunction => button.addEventListener(event, eleFunction));
    }
    if(attributesAndValues) {
        const attributes = Object.keys(attributesAndValues);
        attributes.forEach((key) => {
            button.setAttribute(key, attributesAndValues[key]);
        });
    }
    return button;
}

function makeImg({id, src, title}) {
    const img = new Image();
    if(id) {
        img.setAttribute("id", id);
    }
    if(src) {
        img.src = src;
    }
    if(title) {
        img.setAttribute("title", title);
    }
    return img;
}

function makeInput({type, id, name, pattern, minLength, maxLength, placeholder, required}) {
    const input = document.createElement("input");
    if(type) {
        input.setAttribute("type", type);
    }
    if(id) {
        input.setAttribute("id", id);
    }
    if(name) {
        input.setAttribute("name", name);
    }
    if(pattern) {
        input.setAttribute("pattern", pattern);
    }
    if(minLength) {
        input.setAttribute("minlength", `${Number(minLength)}`);
    }
    if(maxLength) {
        input.setAttribute("maxlength", `${Number(maxLength)}`);
    }
    if(placeholder) {
        input.setAttribute("placeholder", placeholder);
    }
    if(required) {
        input.setAttribute("required", "");
    }
    return input
}

export { makeElement, makeButton, makeImg, makeInput }
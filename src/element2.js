function addElement() {
    const element = document.createElement('div');

    element.innerHTML = 'Hola mundo como estas';

    document.body.appendChild(element)
}

export {
    addElement
}
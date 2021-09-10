const nombres = ['Aura', 'Camilo', 'Luis', 'Daniel'];
const lista = document.querySelector('ul');

for (let i = 0; i < nombres.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = nombres[i]
    lista.append(listItem)
}


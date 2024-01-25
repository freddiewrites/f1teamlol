let brandNamesUS = ['Pepsi', 'Nike', 'Apple', 'Amazon', 'Disney', 'McDonald\'s', 'Google', 'Microsoft', 'Adidas', 'Samsung', 'Sony', 'Toyota', 'Ford', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Honda', 'Nissan'];
let brandNamesUK = ['Tesco', 'Sainsbury\'s', 'Asda', 'Morrisons', 'Boots', 'Marks & Spencer', 'John Lewis', 'British Airways', 'Virgin', 'HSBC', 'Barclays', 'Lloyds', 'NatWest', 'RBS'];

let selectedBrandNames = brandNamesUS;

function changeBrandOrigin() {
    const brandSelector = document.getElementById('brandSelector');
    selectedBrandNames = brandSelector.value === 'us' ? brandNamesUS : brandNamesUK;
}

function generateName() {
    const randomName = generateRandomName();
    document.getElementById('randomName').innerText = randomName;
}

function generateRandomName() {
    let result = '';
    const numBrands = Math.floor(Math.random() * 5) + 1; // Randomly choose between 1 and 5 brands

    for (let i = 0; i < numBrands; i++) {
        const randomIndex = Math.floor(Math.random() * selectedBrandNames.length);
        result += selectedBrandNames[randomIndex] + ' ';
    }

    return result.trim() + ' F1 Team';
}

let brandNamesUS = [
    'Pepsi', 'Nike', 'Apple', 'Amazon', 'Disney', 'McDonald\'s', 'Google', 'Microsoft', 'Adidas', 'Samsung',
    'Sony', 'Toyota', 'Ford', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Honda', 'Nissan', 'Google', 'Facebook',
    'YouTube', 'Amazon', 'Twitter', 'Instagram', 'LinkedIn', 'Pinterest', 'Reddit', 'Netflix', 'eBay', 'Microsoft',
    'Apple', 'Wikipedia', 'Tumblr', 'Spotify', 'Airbnb', 'WhatsApp', 'Snapchat', 'Dropbox', 'Yahoo', 'WordPress',
    'GitHub', 'PayPal', 'CNN', 'BBC', 'The New York Times', 'Forbes', 'National Geographic', 'BuzzFeed', 'AOL',
    'Netscape', 'Yahoo!', 'MSN', 'GeoCities', 'MySpace', 'Hotmail', 'Napster', 'Altavista', 'Lycos', 'Angelfire',
    'ICQ', 'Friendster', 'Ask Jeeves', 'CompuServe', 'LiveJournal', 'Excite', 'Tripod', 'Xanga', 'Delicious', 'Digg',
    'RealPlayer', 'E*TRADE', 'Pets.com', 'EarthLink', 'Bebo', 'Orkut', 'Flickr', 'Webshots', 'Burger King', 'Subway',
    'Pizza Hut', 'Domino\'s', 'KFC', 'Taco Bell', 'Denny\'s', 'IHOP', 'Arby\'s', 'Starbucks', 'Outback Steakhouse',
    'Red Lobster', 'Chili\'s', 'Olive Garden', 'Applebee\'s', 'Buffalo Wild Wings', 'Cheesecake Factory', 'Cracker Barrel',
    'Ruby Tuesday', 'Papa John\'s', 'Panera Bread', 'Sonic Drive-In', 'Jack in the Box', 'Texas Roadhouse',
    'LongHorn Steakhouse', 'Chipotle', 'Five Guys'
];

let brandNamesUK = [
    'Tesco', 'Sainsbury\'s', 'Asda', 'Morrisons', 'Boots', 'Marks & Spencer', 'John Lewis', 'British Airways', 'Virgin',
    'HSBC', 'Barclays', 'Lloyds', 'NatWest', 'RBS', 'Google', 'Facebook', 'YouTube', 'Amazon', 'Twitter', 'Instagram',
    'LinkedIn', 'Pinterest', 'Reddit', 'Netflix', 'eBay', 'Microsoft', 'Apple', 'Wikipedia', 'Tumblr', 'Spotify', 'Airbnb',
    'WhatsApp', 'Snapchat', 'Dropbox', 'Yahoo', 'WordPress', 'GitHub', 'PayPal', 'CNN', 'BBC', 'The New York Times',
    'Forbes', 'National Geographic', 'BuzzFeed', 'AOL', 'Netscape', 'Yahoo!', 'MSN', 'GeoCities', 'MySpace', 'Hotmail',
    'Napster', 'Altavista', 'Lycos', 'Angelfire', 'ICQ', 'Friendster', 'Ask Jeeves', 'CompuServe', 'LiveJournal',
    'Excite', 'Tripod', 'Xanga', 'Delicious', 'Digg', 'RealPlayer', 'E*TRADE', 'Pets.com', 'EarthLink', 'Bebo', 'Orkut',
    'Flickr', 'Webshots', 'Nando\'s', 'Wagamama', 'PizzaExpress', 'Café Rouge', 'Prezzo', 'Zizzi', 'Bella Italia',
    'Pizza Hut', 'McDonald\'s', 'Burger King', 'KFC', 'Subway', 'Greggs', 'Costa Coffee', 'Pret A Manger',
    'Caffè Nero', 'Yo! Sushi', 'Wetherspoon', 'Harvester', 'Frankie & Benny\'s', 'Toby Carvery', 'Miller & Carter',
    'BrewDog', 'Gourmet Burger Kitchen (GBK)', 'The Ivy', 'Dishoom', 'Wahaca', 'Giraffe', 'Leon'
];

let brandNamesAU = [
    'Kmart', 'Target Australia', 'Cotton On', 'David Jones', 'Myer', 'JB Hi-Fi', 'Harvey Norman', 'The Good Guys', 'Bunnings Warehouse', 'Big W',
    'McDonald\'s', 'KFC', 'Subway', 'Pizza Hut', 'Outback Steakhouse', 'Hog\'s Breath Cafe', 'Grill\'d', 'Nando\'s', 'Zambrero', 'Schnitz',
    'Arnott\'s', 'Vegemite', 'Tim Tam', 'Shapes', 'Milo', 'Fantales', 'Twisties', 'Cherry Ripe', 'Paddle Pop', 'Golden Gaytime',
    'Grace Bros', 'Crazy Clark\'s', 'Franklins', 'Dick Smith Electronics', 'Go-Lo', 'Sizzler Australia', 'Bushells', 'Rosella', 'Mandarin',
    'Gumtree', 'Carsales.com.au', 'REA Group', 'Domain', 'Seek', 'Airtasker', 'Canva', 'Atlassian', 'Afterpay', 'Zip Co',
    'SafetyCulture', 'Wotif', 'CarsGuide', 'Hipages', 'Redbubble', 'Finder', 'Whirlpool', 'MenuLog', 'Airwallex', 'Atlassian',
    'Redbubble', 'Envato', 'Airtasker', 'Canva', 'Culture Amp', 'Afterpay', 'Zip Co', 'SafetyCulture', 'Catch.com.au', 'Wotif',
    'CarsGuide', 'Hipages', 'Redbubble', 'Finder', 'Whirlpool', 'MenuLog', 'Airwallex', 'CarsGuide', 'Hipages', 'Redbubble',
    'Finder', 'Whirlpool', 'MenuLog', 'Airwallex',
    'Google', 'Facebook', 'YouTube', 'Amazon', 'Twitter', 'Instagram', 'LinkedIn', 'Pinterest', 'Reddit', 'Netflix', 'eBay', 'Microsoft',
    'Apple', 'Wikipedia', 'Tumblr', 'Spotify', 'Airbnb', 'WhatsApp', 'Snapchat', 'Dropbox', 'Yahoo', 'WordPress', 'GitHub', 'PayPal',
    'CNN', 'BBC', 'The New York Times', 'Forbes', 'National Geographic', 'BuzzFeed', 'AOL', 'Netscape', 'MSN', 'GeoCities', 'MySpace',
    'Hotmail', 'Napster', 'Altavista', 'Lycos', 'Angelfire', 'ICQ', 'Friendster', 'Ask Jeeves', 'CompuServe', 'LiveJournal', 'Excite',
    'Tripod', 'Xanga', 'Delicious', 'Digg', 'RealPlayer', 'E*TRADE', 'Pets.com', 'EarthLink', 'Bebo', 'Orkut', 'Flickr', 'Webshots'
];



let selectedBrandNames = brandNamesUS;

function isMobileSafari() {
    const userAgent = navigator.userAgent;
    return /iP(ad|hone|od).*Version\/\d.*Safari/i.test(userAgent);
}

function changeBrandOrigin() {
    const brandSelector = document.getElementById('brandSelector');
    
    if (brandSelector.value === 'us') {
        selectedBrandNames = brandNamesUS;
    } else if (brandSelector.value === 'uk') {
        selectedBrandNames = brandNamesUK;
    } else if (brandSelector.value === 'au') {
        selectedBrandNames = brandNamesAU;
    }

    generateName();
}

function generateName() {
    const randomName = generateRandomName();
    document.getElementById('randomName').innerText = randomName;
}

function generateRandomName() {
    let uniqueBrandNames = selectedBrandNames.slice();
    let result = '';
    const numBrands = Math.min(Math.floor(Math.random() * 5) + 1, uniqueBrandNames.length);

    for (let i = 0; i < numBrands; i++) {
        const randomIndex = Math.floor(Math.random() * uniqueBrandNames.length);
        result += uniqueBrandNames[randomIndex] + ' ';
        uniqueBrandNames.splice(randomIndex, 1);
    }

    return result.trim() + ' F1 Team';
}

function share() {
    const randomName = document.getElementById('randomName').innerText;

    // Check if the browser is Mobile Safari
    if (isMobileSafari()) {
        // Trigger the iOS share sheet
        const shareData = {
            title: 'Random F1 Team Name',
            text: randomName,
        };

        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        // For non-Mobile Safari browsers, perform the copy to clipboard functionality
        copyToClipboard();
    }
}

function copyToClipboard() {
    const randomName = document.getElementById('randomName').innerText;

    const textarea = document.createElement('textarea');
    textarea.value = randomName;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Display the alert within the page
    const alertElement = document.getElementById('alert');
    alertElement.innerText = 'Random team name copied to clipboard!';
    alertElement.style.top = '10px'; // Slide in from the top
    alertElement.style.display = 'block';

    // Hide the alert after 3 seconds
    setTimeout(() => {
        alertElement.style.top = '-100px'; // Slide up to hide
    }, 3000);
}

// Automatically generate a random team name on page load
window.onload = function () {
  changeBrandOrigin();
};

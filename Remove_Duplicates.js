function removeDuplicates(cards) {
    var uniqueCards = {};
    cards.forEach(function(i) {
        if(!uniqueCards[i]) {
            uniqueCards[i] = true;
        }
    });
    return Object.keys(uniqueCards);
}

var cards = ['Heart5', 'Diamond6', 'Club7', 'Spade8', 'Diamond6', 'Club7'];

console.log(removeDuplicates(cards)); // ['Heart5', 'Diamond6', 'Club7', 'Spade8']  
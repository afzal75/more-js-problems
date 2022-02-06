// const names = ['runa', 'tuna', 'nuna', 'ruma', 'najma', 'rani'];

function oddFriend (names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        let friend = names[i].length;
        if (friend % 2 != 0) {
            unique.push (names[i]);
        }
    }
    return unique [0];
}

console.log(oddFriend (['sajeeb', 'najmul', 'rafi', 'tamim', 'ruman', 'tanjil', 'jishad']));
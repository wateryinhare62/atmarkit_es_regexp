const regex = /^([\w\-\.]+)@([A-Za-z\d\-]+\.)+([A-Za-z]+)$/;
const addresses = [
    'info_user@naosan.jp',
    'nao.yamauchi@mx.japan-east2.example.com',
    'nao%yamauchi@naosan.jp',
    'user@good_domain.jp'
];
addresses.forEach((str, index) => {
    console.log(`${index}:${str}`);
    const result = str.match(regex);
    if (result == null)
        console.log('\tNot matched');
    else
        result.forEach(elem => console.log(`\tMatched: ${elem}`));
});
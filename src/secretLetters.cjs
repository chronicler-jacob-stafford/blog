const cheerio = require('cheerio');

async function printSecretLetters(googleDocUrl) {
    let response = await fetch(googleDocUrl);
    if(!response.ok ) {
        throw new Error("Failed to fetch the google document!");
    }
    let html = await response.text();

    const $ = cheerio.load(html);
    let rawEntries = $('#contents > div > table > tbody > tr > td > p > span');
    let coordinateToLetter = new Map();
    let rowCount = 0;
    let rowMaxLength = 0;
    for(let i = 3; i < rawEntries.length; i += 3 ) {
        let x = $(rawEntries[i]).text().trim();
        let y = $(rawEntries[i + 2]).text().trim();
        let letter = $(rawEntries[i + 1]).text().trim();

        if(!x || !y  || !letter) {
            console.log(`FAILURE TO PARSE: ${x}, ${y} with letter : ` + coordinateToLetter.get(`${x}, ${y}`));
        }

        coordinateToLetter.set(`${x}, ${y}`, letter);

        rowCount = Math.max(rowCount, Number(y));
        rowMaxLength = Math.max(rowMaxLength, x);
    }

    const secretRows = new Array(rowCount).fill('');

    for(let y = 0; y < rowCount + 1; y++) {
        for(let x = 0; x < rowMaxLength; x++) {
            if(!coordinateToLetter.has(`${x}, ${y}`)) 
            {
                secretRows[y] += ' ';
                x++;
            } else {
                secretRows[y] += coordinateToLetter.get(`${x}, ${y}`)
                x++;
            } 
        }
    }

    for(let row of secretRows) {
        console.log(row.replace('undefined', ''));
    }
}

printSecretLetters("https://docs.google.com/document/d/e/2PACX-1vSCJGXDu491Y3rRgJPVhtdsY5ivkbQ5FJMDvPyanh2F7HNk2cea9AZIHa1j-RShETAsCxKqqbZ_Vz7J/pub");


// <table>
//     <tbody>
//     <tr>
//         <td>
//             <p>
//                 <span>
//                     Value of row
//                 </span>
//             </p>
//         </td>
//     </tr>
//     </tbody>
// </table>


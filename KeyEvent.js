const alpha = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', 'i', 'k', 'o', 'l', 'p'];

let randomLetter = alpha[Math.floor(Math.random() * 26)];
console.log(randomLetter);

const secret = `
    <section>
        <h1>SECRET KEY PRESSED! THEY'RE ON TO US!</h1>
    </section>
`;
const reset = `
<section>
    <h1></h1>
</section>
`
const ol = document.querySelector('ol');
;

document.body.addEventListener('keyup', function(event) {
    let letterIndex = randomLetter.indexOf(event.key);
    console.log(letterIndex);
    if(letterIndex === 0) {
        ol.innerHTML = secret;
        randomLetter = alpha[Math.floor(Math.random() * 26)];
        console.log(randomLetter);
    } else {
        ol.innerHTML = reset
    }
});
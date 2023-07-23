var select = document.querySelectorAll('.currancy'),
    input_currancy = document.getElementById('input_currancy'),
    output_currancy = document.getElementById('output_currancy');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
    .then(data => data.json())
    .then((data) => {
        const entries = Object.entries(data);
        // console.log(entries);
        // alert(`10 GBP = ${data.rates.USD} USD`);
        for (i = 0; i < entries.length; i++) {
            select[0].innerHTML += `<option value="${entries[i][0]}" >${entries[i][0]}</option>`
            select[1].innerHTML += `<option value="${entries[i][0]}" >${entries[i][0]}</option>`
        }
    });

function converter() {

    var input_currancy_val = input_currancy.value;
    if (select[0].value != select[1].value) {

        // alert("Right")
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${input_currancy_val}&from=${select[0].value}&to=${select[1].value}`)
            .then((val) => val.json())
            .then((val) => {
                output_currancy.value = Object.values(val.rates)[0]
                // alert(`10 GBP = ${data.rates.USD} USD`);
            });

    }
    else {
        alert('Please select two different currancy')
    }

}
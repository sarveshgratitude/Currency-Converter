selheight = document.querySelectorAll(".select-list");

for (i of selheight) {
    console.log();
    let listid = i.getAttribute('id');
    //for adding the list of the countires into the two dropdowns 
    for (j in countryList) {

        let option = document.createElement('option');
        option.setAttribute('value', countryList[j]);
        option.innerText = j;
        i.append(option)
        // console.log(option);
    }
}
//for chnaging the flag when select list changes

let listfrom = document.querySelector("#select-from");
let listto = document.querySelector("#select-to");

listfrom.addEventListener('change', (ele) => {
    let fromImg = document.querySelector("#from-img");
    fromImg.setAttribute('src', `https://flagsapi.com/${listfrom.value}/shiny/64.png`);

})
listto.addEventListener('change', (ele) => {
    let toImg = document.querySelector("#to-img");
    toImg.setAttribute('src', `https://flagsapi.com/${listto.value}/shiny/64.png`);

})

//for making the msg null when page loads and when any selected till exchange rate button clicks

let msg = document.querySelector("#msg");
msg.innerText = "";

//for getting country code from the value

const getCountryKey = async (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}
//taking out the value from the text box 
let amt = document.querySelector("#amt");
amt.value = "";

//function for updating rates
const updateRates = async (fromKey, toKey, amt) => {
    if (amt === "") {
        msg.innerText = 'Please enter the amount';
    } else if (amt <= 0) {
        msg.innerText = 'Amount should be greater than 0 positive value';

    } else {
        let finamt = (rates[toKey] * amt) / rates[fromKey];
        msg.innerText = `${amt} ${fromKey} = ${finamt} ${toKey}`;
    }


}


//for converting currency

let btn = document.querySelector("button");

btn.addEventListener('click', async (ele) => {
    ele.preventDefault();//adding for the event to prevent submit behaviour
    console.log(`button clicked`);



    //for getting key from the object as rates are keys in the objects
    let fromKey = await getCountryKey(countryList, listfrom.value);
    let toKey = await getCountryKey(countryList, listto.value);
    await updateRates(fromKey, toKey, amt.value);



})

/*
amt

fromKey.rate

tokey.rate

100*usd = 83.03*100

*/


let barcodeForm = document.getElementById('barcodeform')
let submitButton = document.getElementById('submitbutton')
let oldbarcodes = document.getElementById('oldbarcodes')
let newbarcodeslist = document.getElementById('fixedlist')
let errorlist = document.getElementById('errors')

submitButton.addEventListener("click", function(e){
    e.preventDefault();
    //lees de barcodes lijn per lijn en zet in een array
    let oldbarcodesarray = oldbarcodes.value.split("\n")

        //schrijf naar frontend
        oldbarcodesarray.forEach(oldCode => {
            if(oldCode.length === 13) {
                let li = document.createElement("li");
                li.innerText = oldCode;
                newbarcodeslist.appendChild(li);
            } else if (oldCode.length === 12) {
                let li = document.createElement("li");
                li.innerText = '0' + oldCode;
                newbarcodeslist.appendChild(li);
            } else if (oldCode.length === 11) {
                let li = document.createElement("li");
                li.innerText = '00' + oldCode;
                newbarcodeslist.appendChild(li);
            } else if(oldCode.length < 11 && oldCode.length != 0 || oldCode.length > 13) {
                let li = document.createElement("li");
                li.innerHTML = '<span style="color:red;">Check this code please</span>';
                newbarcodeslist.appendChild(li);

                let div = document.createElement("div");
                div.innerHTML = '<span style="color:red;">There are some errors, check list</span>';
                errorlist.appendChild(div);

            } else if(oldCode.length === ' '){
                let li = document.createElement("li");
                li.innerHTML = '<br />';
                newbarcodeslist.appendChild(li);
            }else {
                let li = document.createElement("li");
                li.innerHTML = '<br />';
                newbarcodeslist.appendChild(li);
            }
        })
})
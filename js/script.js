
const alas = document.getElementById('input-alas')
const tinggi = document.getElementById('input-tinggi')
const hitung = document.getElementById('button-hitung')
const output = document.getElementById('output')
hitung.addEventListener(`click`, function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Luas segitiga dengan alas ${a}cm dan tinggi ${t}cm adalah ${l}cm2`
})

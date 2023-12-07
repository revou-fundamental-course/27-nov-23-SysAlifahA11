//luas

const alas = document.getElementById('input-alas')
const tinggi = document.getElementById('input-tinggi')
const hitung = document.getElementById('button-hitung')
const reset = document.getElementById('button-reset')
const output = document.getElementById('output')

hitung.addEventListener(`click`, function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Luas segitiga dengan alas ${a}cm dan tinggi ${t}cm adalah ${l}cm2`
})

reset.addEventListener(`click`, function(){
    let a = alas.value
    let t = tinggi.value
    alas.value = null;
    tinggi.value = null;
    output.innerHTML = null;
})

//keliling

const ab = document.getElementById('input-sisiab')
const bc = document.getElementById('input-sisibc')
const ca = document.getElementById('input-sisica')
const hitung1 = document.getElementById('button-hitung1')
const reset1 = document.getElementById('button-reset1')
const output1 = document.getElementById('output1')

hitung1.addEventListener(`click`, function(){
    let s1 = ab.value
    let s2 = bc.value
    let s3 = ca.value
    let k = s1+s2+s3
    output1.innerHTML = `Keliling segitiga dengan sisi ${s1}cm, ${s2}cm, dan ${s3}cm adalah ${k}cm`
})

reset1.addEventListener(`click`, function(){
    let s1 = ab.value
    let s2 = bc.value
    let s3 = ca.value
    let k = s1+s2+s3
    ab.value = null;
    bc.value = null;
    ca.value = null;
    output1.innerHTML = null;
})
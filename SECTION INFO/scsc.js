function verif(){
    let x =document.getElementById("c1").value;
    let y =document.getElementById("c2").value;
    let z = document.getElementById("s1").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp").value=parseFloat(f).toFixed(2);
    if (0 <= x && x <= 20) {
        c1.style.cssText="background:white"
    } else {
        c1.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c2.style.cssText="background:white"
    } else {
        c2.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s1.style.cssText="background:white"
    } else {
        s1.style.cssText="background:red"
    }
    
}

document.getElementById("c1").addEventListener("input", verif);
document.getElementById("c2").addEventListener("input", verif);
document.getElementById("s1").addEventListener("input", verif);

function verif1(){
    let x = document.getElementById("c3").value;
    let y = document.getElementById("c4").value;
    let z = document.getElementById("s2").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp2").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c3.style.cssText="background:white"
    } else {
        c3.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c4.style.cssText="background:white"
    } else {
        c4.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s2.style.cssText="background:white"
    } else {
        s2.style.cssText="background:red"
    }
}

document.getElementById("c3").addEventListener("input", verif1);
document.getElementById("c4").addEventListener("input", verif1);
document.getElementById("s2").addEventListener("input", verif1);

function verif2(){
    let x = document.getElementById("c5").value;
    let y = document.getElementById("c6").value;
    let z = document.getElementById("s3").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp3").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c5.style.cssText="background:white"
    } else {
        c5.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c6.style.cssText="background:white"
    } else {
        c6.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s3.style.cssText="background:white"
    } else {
        s3.style.cssText="background:red"
    }
}

document.getElementById("c5").addEventListener("input", verif2);
document.getElementById("c6").addEventListener("input", verif2);
document.getElementById("s3").addEventListener("input", verif2);

function verif3(){
    let x = document.getElementById("c7").value;
    let y = document.getElementById("c8").value;
    let z = document.getElementById("s4").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp4").value=parseFloat(f).toFixed(2);
    if (0 <= x && x <= 20) {
        c7.style.cssText="background:white"
    } else {
        c7.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c8.style.cssText="background:white"
    } else {
        c8.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s4.style.cssText="background:white"
    } else {
        s4.style.cssText="background:red"
    }
}

document.getElementById("c7").addEventListener("input", verif3);
document.getElementById("c8").addEventListener("input", verif3);
document.getElementById("s4").addEventListener("input", verif3);
function verif4(){
    let x = document.getElementById("c9").value;
    let y = document.getElementById("c100").value;
    let z = document.getElementById("s5").value;
    let f = String((Number(x)+Number(y) + (Number(z) * 2)) / 4);
    document.getElementById("sp5").value=parseFloat(f).toFixed(2);
    if (0 <= x && x <= 20) {
        c9.style.cssText="background:white"
    } else {
        c9.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c100.style.cssText="background:white"
    } else {
        c100.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s5.style.cssText="background:white"
    } else {
        c5.style.cssText="background:red"
    }
}
document.getElementById("c9").addEventListener("input", verif4);
document.getElementById("s5").addEventListener("input", verif4);
document.getElementById("c100").addEventListener("input", verif4);

function verif5(){
    
    let x = document.getElementById("c10").value;
    let y = document.getElementById("c11").value;
    let z = document.getElementById("s6").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp6").value=parseFloat(f).toFixed(2);
    if (0 <= x && x <= 20) {
        c10.style.cssText="background:white"
    } else {
        c10.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c11.style.cssText="background:white"
    } else {
        c11.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s6.style.cssText="background:white"
    } else {
        s6.style.cssText="background:red"
    }
}

document.getElementById("c10").addEventListener("input", verif5);
document.getElementById("c11").addEventListener("input", verif5);
document.getElementById("s6").addEventListener("input", verif5);
function verif6(){
    let x = document.getElementById("c12").value;
    let y = document.getElementById("c13").value;
    let z = document.getElementById("s7").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp7").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c12.style.cssText="background:white"
    } else {
        c12.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c13.style.cssText="background:white"
    } else {
        c13.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s7.style.cssText="background:white"
    } else {
        s7.style.cssText="background:red"
    }
}

document.getElementById("c12").addEventListener("input", verif6);
document.getElementById("c13").addEventListener("input", verif6);
document.getElementById("s7").addEventListener("input", verif6);
function verif666(){
    let x = document.getElementById("c66").value;
    let y = document.getElementById("c67").value;
    let z = document.getElementById("s68").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp68").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c66.style.cssText="background:white"
    } else {
        c66.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c67.style.cssText="background:white"
    } else {
        c67.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s68.style.cssText="background:white"
    } else {
        s68.style.cssText="background:red"
    }
}

document.getElementById("c66").addEventListener("input", verif666);
document.getElementById("c67").addEventListener("input", verif666);
document.getElementById("s68").addEventListener("input", verif666);
function verif7(){
    let x = document.getElementById("c14").value;
    let y = document.getElementById("c15").value;
    let z = document.getElementById("s8").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp8").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c14.style.cssText="background:white"
    } else {
        c14.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c15.style.cssText="background:white"
    } else {
        c15.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s8.style.cssText="background:white"
    } else {
        s8.style.cssText="background:red"
    }
}

document.getElementById("c14").addEventListener("input", verif7);
document.getElementById("c15").addEventListener("input", verif7);
document.getElementById("s8").addEventListener("input", verif7);
function verif8(){
    let x = document.getElementById("c16").value;
    let y = document.getElementById("c17").value;
    let z = document.getElementById("s9").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp9").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c16.style.cssText="background:white"
    } else {
        c16.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c17.style.cssText="background:white"
    } else {
        c17.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s8.style.cssText="background:white"
    } else {
        s8.style.cssText="background:red"
    }
}

document.getElementById("c16").addEventListener("input", verif8);
document.getElementById("c17").addEventListener("input", verif8);
document.getElementById("s9").addEventListener("input", verif8);
function verif9(){
    let x = document.getElementById("c18").value;
    let y = document.getElementById("c19").value;
    let z = document.getElementById("s10").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp10").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c18.style.cssText="background:white"
    } else {
        c18.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c19.style.cssText="background:white"
    } else {
        c19.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s10.style.cssText="background:white"
    } else {
        s10.style.cssText="background:red"
    }
}

document.getElementById("c18").addEventListener("input", verif9);
document.getElementById("c19").addEventListener("input", verif9);
document.getElementById("s10").addEventListener("input", verif9);
function verif10(){
    let x = document.getElementById("c20").value;
    let y = document.getElementById("c21").value;
    let z = document.getElementById("s11").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp11").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c20.style.cssText="background:white"
    } else {
        c20.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c21.style.cssText="background:white"
    } else {
        c21.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s11.style.cssText="background:white"
    } else {
        ss11.style.cssText="background:red"
    }
}

document.getElementById("c20").addEventListener("input", verif10);
document.getElementById("c21").addEventListener("input", verif10);
document.getElementById("s11").addEventListener("input", verif10);

function verif11(){
    let x = document.getElementById("c22").value;
    let y = document.getElementById("c23").value;
    let z = document.getElementById("s12").value;
    let f = String((Number(x) + Number(y) + (Number(z) * 2)) / 4);
    let sp = document.getElementById("sp");
    let m = document.getElementById("m");
    document.getElementById("sp12").value=parseFloat(f).toFixed(2);;
    if (0 <= x && x <= 20) {
        c22.style.cssText="background:white"
    } else {
        c22.style.cssText="background:red"
    }
    if (0 <= y && y <= 20) {
        c23.style.cssText="background:white"
    } else {
        c23.style.cssText="background:red"
    }
    if (0 <= z && z <= 20) {
        s12.style.cssText="background:white"
    } else {
        s12.style.cssText="background:red"
    }
}
document.getElementById("c22").addEventListener("input", verif11);
document.getElementById("c23").addEventListener("input", verif11);
document.getElementById("s12").addEventListener("input", verif11);
function test(){
    let a=document.getElementById("sp").value
    let b=document.getElementById("sp2").value
    let c=document.getElementById("sp3").value
    let d=document.getElementById("sp4").value
    let e=document.getElementById("sp5").value
    let f=document.getElementById("sp6").value
    let g=document.getElementById("sp7").value
    let mm=document.getElementById("sp68").value
    let h=document.getElementById("sp8").value
    let i=document.getElementById("sp9").value
    let j=document.getElementById("sp10").value
    let k=document.getElementById("sp11").value
    let l=document.getElementById("sp12").value
    let x=(Number(a)*2+Number(b)*2+Number(c)*2+Number(d)*4+Number(e)*4+Number(f)+
    Number(g)*1.5+Number(mm)*2+Number(h)+Number(i)+Number(j)+
    Number(k)*2+Number(l))/24.50
    df.textContent=parseFloat(x).toFixed(2);
    

}
document.getElementById("sub").addEventListener("click",test)
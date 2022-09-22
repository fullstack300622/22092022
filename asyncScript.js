const function1 = ()=>{
    console.log(1);
}
const function2 = ()=>{
    setTimeout(()=>{
        console.log(2);
    },0)    
}
const function3 = ()=>{
    console.log(3);
}

function1()
function2()
function3()

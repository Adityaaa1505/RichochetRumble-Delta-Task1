async function sleep(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("wait is over!")
        }, time)
    })
}
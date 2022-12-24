

export const fetcher = async (url, options) => {
let res;


try {
    if (!options) {
        res = await fetch(url);
        console.log(res)
} 
else {
    res = await fetch(url, options)
}
}

catch (error) {
    console.log(error)
}

// if (!options) {
//     res = await fetch(url);
// } else {
//     res = await fetch(url, options)
// }

// const data = await res.json(data);


}



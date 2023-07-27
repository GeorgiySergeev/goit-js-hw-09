function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else { 
    // Reject
  }
}


const promise = new Promise((resolve, reject) => {

  resolve(console.log('Ok!'))
  reject(console.log("No!"))
})


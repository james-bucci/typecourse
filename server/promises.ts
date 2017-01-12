


function doTask (taskName : string) : Promise<string> {
    return new Promise(
        (resolve, reject) => {

            let duration1: number = Math.random() * 5000
            let duration2: number = Math.random() * 5000;

            console.log(`${taskName} started, Resolved: ${duration1}, Rejected: ${duration2}`);

            setTimeout( () => resolve(`${taskName} completed in ${duration1}`), duration1);
            setTimeout( () => reject(`${taskName} failed after ${duration2}`), duration2);        
        },
    );
}

var stage1, stage2, stage3 : string ;

// doTask('Task Number 1')
//     .then((res) => {
//         stage1 = res;
//         return doTask('stage 2... ');
//     })
//      .then((res) => {
//         stage2 = res;
//         return doTask('stage 3... ');
//     })
//     .then((res) => {
//         stage3 = res;
//         console.log('the tasks are complete')
//     });

doTask('Task Number 1')
    .then((val) => {console.log(val); return val;})
    .then(() => console.log('return nothing'))
    .then(nextval => console.log("nextval:", nextval))
    .then( () => {throw new Error('error')})
    .catch((val) => {console.log('Catch:' + val)}); 

// doTask('Task Number 2')
//     .then((val) => {console.log(val)})
//     .catch((val) => {console.log(val)});

// doTask('Take Number 3')
//     .then((val) => {console.log(val)})
//     .catch((val) => {console.log(val)});

// Promise.all([ doTask('Task Number 1'), doTask('Task Number 2'), doTask('Take Number 3')])
//     .then((val) => {console.log(val)})
//     .catch((val) => {console.log(val)});

// function testFn (test: string) : Promise<string> {
//     return new Promise(
//         (resolve) = {},
//         (reject) => {}
//     );
        

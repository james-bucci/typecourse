


function doTask (taskName : string) : Promise<string> {
    return new Promise(
        (resolve, reject) => {

            let duration1: number = Math.random() * 5000
            let duration2: number = Math.random() * 5000;

            console.log(`Task (${taskName}), Resolved: ${duration1}, Rejected: ${duration2}`);

            setTimeout( () => resolve(`${taskName} completed in ${duration1}`), duration1);
            setTimeout( () => reject({taskName: `${taskName} failed after ${duration2}`}), duration2);        
        },
    );

}

var stage1, stage2, stage3 : { taskName : string };

// doTask('stage 1....')
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

doTask('stage 1....')
    .then((val) => {console.log(val)})
    .catch((val) => {console.log(val)}); 


doTask('stage 2....')
    .then((val) => {console.log(val)})
    .catch((val) => {console.log(val)});

doTask('stage 3....')
    .then((val) => {console.log(val)})
    .catch((val) => {console.log(val)});

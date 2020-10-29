function showTask(tasks){
    console.log("################");
    console.log("現在持っているタスク一覧");
    console.log("################");

    tasks.forEach(function(elem, index){
        console.log(index + ': ' + elem);
    });
}

function addTask(tasks){
    const task = prompt("タスクは？");
    tasks.push(task);
}

const tasks = ['掃除', '買い物', '散歩'];
showTask(tasks);

while(true){    
    addTask(tasks);
    showTask(tasks);
}
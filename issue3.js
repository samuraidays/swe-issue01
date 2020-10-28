function ShowTask(tasks){
    console.log("################");
    console.log("現在持っているタスク一覧");
    console.log("################");

    tasks.forEach(function(elem, index){
        console.log(index + ': ' + elem);
    });
}

function AddTask(tasks){
    const task = prompt("タスクは？");
    tasks.push(task);
}

const tasks = ['掃除', '買い物', '散歩'];
ShowTask(tasks);

while(true){    
    AddTask(tasks);
    ShowTask(tasks);
}
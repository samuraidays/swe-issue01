function showTask(tasks){
    console.log("################");
    console.log("現在持っているタスク一覧");
    console.log("################");

for (let i = 0; i < tasks.length; i++){
    console.log(i+1 + ': ' + '[内容] ' + tasks[i][0] + ' [ジャンル] ' + tasks[i][1]);
}}

var tasks = [
    ["机を片付ける","掃除"],
    ["牛乳を買う","買い物"],
    ["散歩する","運動"],
];
showTask(tasks);

function addTask(tasks){
    var task = [];
    task[0] = prompt("タスクは？"),
    task[1] = prompt("ジャンルは？")
    tasks.push(task);
}

while(true){    
    addTask(tasks);
    showTask(tasks);
}
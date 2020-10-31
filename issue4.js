function showTask(a){
    console.log("################");
    console.log("現在持っているタスク一覧");
    console.log("################");

for (let i = 0; i < a.item.length; i++){
    console.log(i+1 + ': ' + '[内容] ' + a.item[i] + ' [ジャンル] ' + a.genre[i]);
}}

let tasks = {
    item: ["机を片付ける", "牛乳を買う", "散歩する"],
    genre: ["掃除", "買い物", "運動"]
}

showTask(tasks);

function addTask(tasks){
    let item = prompt("タスクは？");
    tasks.item.push(item);
    let genre = prompt("ジャンルは？");
    tasks.genre.push(genre);
}

while(true){    
    addTask(tasks);
    showTask(tasks);
}
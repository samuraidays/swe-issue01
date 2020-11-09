function showTask(tasksnum){
    console.log("################\n現在持っているタスク一覧\n################¥n");

for (let i = 0; i < tasksnum.length; i++){
    console.log(`${i+1}: [内容] ${tasksnum[i].item} [ジャンル] ${tasksnum[i].genre}`);
}};

const task1 = {
    item: "机を片付ける",
    genre: "掃除"
};

const task2 = {
    item: "牛乳を買う",
    genre: "買い物"
};

const task3 = {
    item: "散歩する",
    genre: "運動"
};

const tasks = [task1, task2, task3];

showTask(tasks);

function addTask(tasks){
    const item = prompt("タスクは？");
    const genre = prompt("ジャンルは？");
    const newtask = {
        item: item,
        genre: genre
    };
    tasks.push(newtask);
};


addTask(tasks);
showTask(tasks);


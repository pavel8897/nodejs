//https://www.youtube.com/playlist?list=PLM7wFzahDYnHsnxdDD4EGKFkgD1rVcM47

const fs = require('fs');
const path = require('path');

//проверка существования папки
function f01() {
    const pathToDir = './test';
    if (fs.existsSync(pathToDir)) {
        console.log('yes')
    } else {
        console.log('no')
    }
}

//f01();

//Проверка существования файла
function f02() {
    const pathToFile = './test/info.dat';
    if (fs.existsSync(pathToFile)) {
        console.log('yes')
    } else {
        console.log('no')
    }
}

// f02();

//Вычисление размера файла
function f03() {
    const pathToFile = './test/info.dat';
    const fileInfo = fs.statSync(pathToFile);
    console.log(fileInfo.size);
}

// f03();

//Имя и расширение файла
function f04() {
    const pathToFile = './test/info.dat';
    console.log(path.basename(pathToFile));
    console.log(path.dirname(pathToFile));
}

// f04();

//Получаем файлы и папки в директории

function f05() {
    const pathToDir = './test';
    const allFiles = fs.readdirSync(pathToDir);
    console.log(allFiles);
}

// f05();


const pathToFile = 'test/info.txt';

const data = fs.readFileSync(pathToFile, {encoding: 'utf8', flag: 'r'});
console.log(typeof data);
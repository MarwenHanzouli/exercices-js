function matr(tab)
{
    let i=-1
    tab.forEach(element => {
        i++;
        console.log("row" +i)
        element.forEach((el0)=> console.log(el0))
    });
}
let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
matr(a)
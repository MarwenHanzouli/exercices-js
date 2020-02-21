function last(tab,n=1)
{
    if(n>0)
    return tab.reverse().slice(0,n).reverse();
    return []
}
let t=[1,2,4,5,6,8]
console.log(last(t,2))
console.log(last(t))
console.log(last(t,-3))
console.log(last([],-3))
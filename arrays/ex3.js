function first(tab,n=1)
{
    if(n>0)
    return tab.slice(0,n);
    return []
}
let t=[1,2,4,5,6,8]
console.log(first(t,2))
console.log(first(t))
console.log(first(t,-3))
console.log(first([],-3))
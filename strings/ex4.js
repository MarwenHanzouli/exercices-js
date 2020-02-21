function truncate_string(ch,n=0)
{
    return ch.slice(0,n)
}
let cha="abcde fgh"
console.log(truncate_string(cha,3))
console.log(truncate_string(cha,6))
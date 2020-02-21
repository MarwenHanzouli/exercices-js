function repeat(ch,n=0)
{
    let ch2=""
    for(i=0;i<n;i++)
    {
        ch2=ch2+ch
    }
    return ch2
}
console.log(repeat("ha?",3))
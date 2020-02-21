function sumt(t1,t2)
{
    let t3=[]
    let taille=0,index=0
    let tt=[]
    if(t1.length<t2.length)
    {
        taille1=t1.length
        index=t2.length
        tt=t2
    }
    else
    {
        index=t1.length
        taille1=t2.length
        tt=t1
    }
    for(i=0;i<taille1;i++)
    t3[i]=t1[i]+t2[i]   
    for(j=taille1;j<index;j++)
    t3[j]=tt[j]

    return t3
}
console.log(sumt([1,2,3,4],[1,5,6,8,7]))
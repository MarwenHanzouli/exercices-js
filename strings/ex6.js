function protect_email(email)
{
    ind=email.indexOf('@')
    ch=""
    for(i=0;i<email.length;i++)
    {
        if(i>ind-4 && i<ind)
        ch=ch+"."
        else
        ch=ch+email[i]
    }
    return ch
}
let t="marwenhanzouli@gmail.com"
console.log(protect_email(t))

export const filterOdd=(...arr)=>
{
    let ans=[];
    arr.forEach(ele=>{
        if(ele%2!=0)
        {
            ans.push(ele);
        }
    });
    return ans;
}
export const filterEven=(...arr)=>
{
    let ans=[];
    arr.forEach(ele=>{
        if(ele%2==0)
        {
            ans.push(ele);
        }
    });
    return ans;
}
export const generateRandomList=(n=7)=>
{
    let res=[];
    for(let i=0;i<n;i++)
    {
        res.push(Math.floor(Math.random()*100));
    }
    return res;
}
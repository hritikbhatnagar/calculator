let d=document.querySelectorAll("button");
    let inp=document.querySelector("input");
    for(let x of d)
    {
        x.addEventListener("click",function(e)
    {
        let t=e.target.innerText;
        
        if(t=="AC")
        {
      
            inp.value="";
        }
        else if(t=="=")
        {
            try{
                inp.value=eval(inp.value);
            }
            catch(err)
            {
                inp.value="error";
                
            }
           
        }
      if(t!=="=" && t!=="AC")
      {

            inp.value=inp.value+t;
      }        
        // inp.value=inp.value+t;
        
        
    });
}

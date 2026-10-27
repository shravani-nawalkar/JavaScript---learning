function CheckPerfect(No)
{
    let i = 0;
    let sum = 0; 

   for(i = 1 ; i<= No; i++)
   {
      if(No % 2 == 0)
      {
      sum = sum +1;
      }
   }
      return(No == sum)
}
function main()
{
   let bret = false;
   bret = CheckPerfect(28)

   if(bret == true)
   {
      console.log("It is Perfect Number");
   }
   else
   {
      console.log("It is Not a Perfect Number");
   }
}
main();
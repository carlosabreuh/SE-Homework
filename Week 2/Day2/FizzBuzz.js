// my fizzbuzz
const fb = [];
 var i;
 for(i=1; i<=16; i++)
 	{
     if(i%3==0 && i%5!=0)
       {
         fb.push('fizz');
       }
       else if(i%5==0 && i%3!=0)
   {
     fb.push('buzz');
   }
   else if(i%3==0 && i%5==0)
   {
     fb.push('fizzbuzz');
   }
     else
       {
         fb.push(i);
       }
 }
     console.log(fb)
<!DOCTYPE html>
<html>
    <head>
        <title>multiplication table</title>
    </head>
    <body>
        <script>
            var n=prompt("enter a positive number");
            n>0;
            if(!isNaN(n))
            {
                var table="";
                var number="";
                for(i=0;i<=10;i++)
                {
                    number=n*i;
                    table+=n+"*"+i+"="+number+"\n";
                }
                alert(table);
            }
            else{
                alert("enter positive value:")
                n=prompt("enter positive value for n:"," ");
            }
            document.write(n+"table values are displayed...<br/>");
        </script>
    </body>
</html>

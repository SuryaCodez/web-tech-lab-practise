<!DOCTYPE html>
<html>
    <head>
        <title>sum of numbers</title>
    </head>
    <body>
        <script>
            function sum()
            {
                var res=0;
                var a=parseInt(prompt("enter first number:"));
                res=res+a;
                while(confirm("add more numbers???"))
                {
                    var c=parseInt(prompt("enter number:"));
                    res=res+c;
                }
                alert("sum of number is:"+res);
            }
            sum();
        </script>
    </body>
</html>

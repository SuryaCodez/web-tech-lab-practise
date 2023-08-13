<!DOCTYPE html>
<html>
    <head>
        <title>factorial</title>
        <script>
            function factorialcalc()
            {
                number=parseInt(prompt("enter a number"));
                factorial=1;
                for(i=1;i<=number;i++)
                {
                factorial=factorial*i;
                }
                alert("the factorial of"+number+"is"+factorial);
            }
        </script>
    </head>
    <body>
        <form name="form">
            <input type="button" value="factorial" onclick="factorialcalc()"/>
        </form>
    </body>
</html>

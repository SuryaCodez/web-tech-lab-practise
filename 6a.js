<!DOCTYPE html>
<html>
    <body>
        <script>
            function display()
            {
                var x="you have clicked";
                var d= new Date();
                var date=d.getDate();
                var month=d.getMonth();
                month++;
                var year=d.getFullYear();
                document.getElementById("dis").value=date+"/"+month+"/"+year;
            }
        </script>
        <form>
            <input type="text" id="dis"/>
            <input type="button" value="display date" onclick="display()"/>
        </form>
    </body>
</html>

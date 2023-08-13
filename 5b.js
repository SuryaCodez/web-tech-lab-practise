<!DOCTYPE html>
<html>
    <head>
        <script language="javascript">
            function phno()
            {
                var ph=f.ph.value;
                if(ph.length==10)
                {
                    if(isNaN(ph))
                    
                    alert("not valid phone number");
                    
                    else
                    alert("valid phone number");
                }
                else
                alert("enter valid ph");

            }
        </script>
        </head>
        <body>
            <form name="f">
                <table align="center">
                    <tr>
                        <td align="right">phone number</td>
                        <td align="left"><input type="text" maxlength="15" size="30" name="ph"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" value="submit" onClick="phno()"/></td>
                    </tr>
                </table>
            </form>
        </body>
</html>

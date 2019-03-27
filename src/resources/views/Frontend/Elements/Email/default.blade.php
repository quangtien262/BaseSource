<div style="width: 100%; float: left; font-family: arial; background: #eee; ">
    <div style="width: 500px; margin:auto; box-shadow: 5px 5px 3px 4px;">
        
        <div style=" font-family: Arial,Verdana,sans-serif;width: 100%; float: left; background: #fff;padding: 10px 19px; margin-bottom:30px; border-radius: 0px 0px 5px 5px; border-top: 2px #bc002d solid">
           
            <h1 style="font-size: 18px; width: 100%; float: left; text-align: center; line-height: 30px">
                {{ $title }}
            </h1>
            <p>Chào Bạn</p>
            <p><em>Bạn nhận một thư gửi liên hệ từ website saclaptop.net</em></p>
            <table style="width: 100%; float: left; background:#b6ecff; font-family: Arial,Verdana,sans-serif; padding:30px; line-height: 40px; border-radius: 5px">
                <tr>
                    <td style="border-bottom: 1px dashed #a2cede; width: 35%">Tiêu đề:</td>
                    <td style="border-bottom: 1px dashed #a2cede;"><a href="">{{ $title }}</a></td>
                </tr>
                <tr>
                    <td style="border-bottom: 1px dashed #a2cede;">Người gủi:</td>
                    <td style="border-bottom: 1px dashed #a2cede;"><a>{{ $name }}</a></td>
                </tr>
                <tr>
                    <td style="border-bottom: 1px dashed #a2cede;">Người gủi:</td>
                    <td style="border-bottom: 1px dashed #a2cede;"><a>{{ $email }}</a></td>
                </tr>
                <tr>
                    <td style="border-bottom: 1px dashed #a2cede;">Số ĐT: </td>
                    <td style="border-bottom: 1px dashed #a2cede;">{{ $phone }}</td>
                </tr>
                <tr>
                    <td style="border-bottom: 1px dashed #a2cede;">Thời gian:</td>
                    <td style="border-bottom: 1px dashed #a2cede;">{{ date('H:i:s d/m/Y') }}</td>
                </tr>
                <tr>
                    <td style="border-bottom: 1px dashed #a2cede;">Nội dung:</td> 
                    <td style="border-bottom: 1px dashed #a2cede;">{{ $content }}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
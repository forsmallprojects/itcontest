using IronQr;
using IronSoftware.Drawing;
using System;
using System.Drawing;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        // забираем файл
        var qrCodePath = AnyBitmap.FromFile("qrcode.png");
        QrImageInput Input = new QrImageInput(qrCodePath);
        QrReader Reader = new QrReader();
        IEnumerable<QrResult> qrResults = Reader.Read(Input);
        var res = qrResults.First().Value;
        // проверка на существование результата
        if (res is not null){
            Console.WriteLine(res);
        }

    }
}

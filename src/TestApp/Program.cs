using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mercury.Models;

namespace TestApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var dt = new DataTable();

            dt.Columns.Add("Column1");
            dt.Columns.Add("Column2");

            for (var index = 0; index < 5; index++)
            {
                var newRow = dt.NewRow();
                newRow["Column1"] = index.ToString();
                newRow["Column2"] = index.ToString();

                dt.Rows.Add(newRow);
            }

            var dtMercury = MercuryDataTable.FromDataTable(dt);
            var xmlTable = dtMercury.ToXml();

            Console.WriteLine(xmlTable);

            var parseResult = MercuryDataTable.FromXml(xmlTable);

            // Сериализуем в Json
            var strJson = dtMercury.ToJson();

            // Десериализуем из json
            var dtMercuryFromJson = MercuryDataTable.FromJson(strJson);

            Console.ReadKey();
        }
    }
}

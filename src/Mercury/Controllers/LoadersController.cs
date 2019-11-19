using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Xml;
using Mercury.Models;

namespace Mercury.Controllers
{
    public class LoadersController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public string GetTable()
        {
            var dt = new DataTable();

            dt.Columns.Add("Column1");
            dt.Columns.Add("Column2");

            for (var index = 0; index < 9; index++)
            {
                var newRow = dt.NewRow();
                newRow["Column1"] = index.ToString();
                newRow["Column2"] = index.ToString();

                dt.Rows.Add(newRow);
            }

            var mercuryTable = MercuryDataTable.FromDataTable(dt);
            var jsonMercuryTable = mercuryTable.ToJson();

            return jsonMercuryTable;
        }
    }
}
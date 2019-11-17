using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Xml;
using System.Xml.Linq;
using Newtonsoft.Json;

namespace Mercury.Models
{
    /// <summary>
    /// Класс инкапсулирует табличный набор данных
    /// </summary>
    public sealed class MercuryDataTable
    {
        #region PrivateFields

        private readonly string[] _columns;
        private readonly object[][] _rows;

        #endregion

        #region Constructors

        private MercuryDataTable(string[] columns, object[][] rows)
        {
            _columns = columns;
            _rows = rows;
        }

        #endregion

        #region Public properties

        /// <summary>
        /// Набор столбцов
        /// </summary>
        public string[] Columns => _columns;

        /// <summary>
        /// Набор строк
        /// </summary>
        public object[][] Rows => _rows;

        #endregion

        #region Public methods

        /// <summary>
        /// Сериализовать в формат Xml
        /// </summary>
        /// <returns></returns>
        public string ToXml()
        {
            // Создаем коллекцию xml элементов для имен столбцов
            var xElementColumnNamesList = new List<XElement>();
            foreach (var columnsName in _columns)
            {
                var xElementColumnName = new XElement("column", columnsName);
                // Добавляем в эту коллекцию элемент формата <column>{значение}</column>
                xElementColumnNamesList.Add(xElementColumnName);
            }

            // Создаем коллекцию xml элементов для строк
            var xElementRowsWithValuesList = new List<XElement>();
            foreach (var rowWithValues in _rows)
            {
                // Создаем коллекцию xml элементов значений конкретной строки
                var xElementRowValuesList = new List<XElement>();

                foreach (var value in rowWithValues)
                {
                    var xElementValue = new XElement("value", value);
                    // Добавляем в эту коллекцию элемент формата <value>{значение}</value>
                    xElementRowValuesList.Add(xElementValue);
                }

                // Добавляем сформированные элементы в формате <row><value>{значение}</value></row>
                xElementRowsWithValuesList.Add(new XElement("row", xElementRowValuesList));
            }

            var xDocument = new XDocument(
                new XElement("table",
                    new XElement("columns",
                        xElementColumnNamesList),
                    new XElement("rows",
                        xElementRowsWithValuesList)));
            var result = xDocument.ToString();

            return result;
        }

        /// <summary>
        /// Сериализовать в формат Json  
        /// </summary>
        /// <returns></returns>
        public string ToJson()
        {
            var table = new Table()
            {
                Columns = _columns,
                Rows = _rows
            };

            var stringJson = JsonConvert.SerializeObject(table);
            return stringJson;
        }

        #endregion

        #region Static methods

        /// <summary>
        /// Создать объект на основе экземпляра System.Data.DataTable
        /// </summary>
        /// <param name="dataTable"></param>
        /// <returns></returns>
        public static MercuryDataTable FromDataTable(DataTable dataTable)
        {
            var columnsNames = dataTable.Columns.Cast<DataColumn>().Select(x => x.ColumnName).ToArray();
            var rowsWithValues = dataTable.Rows.Cast<DataRow>().Select(x => x.ItemArray).ToArray();

            var result = new MercuryDataTable(columnsNames, rowsWithValues);
            return result;
        }

        /// <summary>
        /// Десериализовать объект из формата Xml
        /// </summary>
        /// <param name="xml"></param>
        /// <returns></returns>
        public static MercuryDataTable FromXml(string xml)
        {
            var xDocument = XDocument.Parse(xml);
            var columns = xDocument
                .Element("table")
                .Element("columns")
                .Elements("column")
                .Select(x => x.Value)
                .ToArray();

            var rows = xDocument
                .Element("table")
                .Elements("rows")
                .Elements("row")
                .Select(x => x.Elements("value")
                    .Select(y => y.Value)
                    .ToArray())
                .ToArray();

            var result = new MercuryDataTable(columns, rows);

            return result;
        }

        /// <summary>
        /// Десериализовать объект из формата Json
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static MercuryDataTable FromJson(string json)
        {
            var table = JsonConvert.DeserializeObject<Table>(json);
            var columns = table.Columns;
            var rows = table.Rows;

            return new MercuryDataTable(columns, rows);
        }

        #endregion

        #region Nested types

        /// <summary>
        /// Внутренний класс для манипуляций с автоматической сериализацией/десериализацией
        /// </summary>
        private class Table
        {
            [JsonProperty(propertyName: "columns")]
            public string[] Columns { get; set; }

            [JsonProperty(propertyName: "rows")]
            public object[][] Rows { get; set; }
        }

        #endregion

    }
}
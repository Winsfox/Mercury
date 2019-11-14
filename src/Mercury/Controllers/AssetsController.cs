using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Mercury.Controllers
{
    public class AssetsController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public IEnumerable<string> GetByIsin()
        {
            return new string[] { "value3", "value4" };
        }
    }
}
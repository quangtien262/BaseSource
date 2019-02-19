using Microsoft.AspNetCore.Mvc.Rendering;
using System;

namespace CentricMVC6
{
    public static class HtmlHelpers
    {
        public static string isActive(this IHtmlHelper html, string controller = null, string action = null)
        {
            string activeClass = "active"; // edit here to use another classname to activate items
            // detect current route state
            string actualAction = (string) html.ViewContext.RouteData.Values["action"];
            string actualController = (string) html.ViewContext.RouteData.Values["controller"];

            if (String.IsNullOrEmpty(controller))
                controller = actualController;

            if (String.IsNullOrEmpty(action))
                action = actualAction;

            return (controller == actualController && action == actualAction) ? activeClass : String.Empty;
        }
    }
}

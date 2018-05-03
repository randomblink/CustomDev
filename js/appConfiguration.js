/*

    isDebug: 
    This flag turns debugging on or off. Its default value is false. When you turn this flag on, Firefox generates extended debugging information in Firebug. If you're using some other browser, it includes the Firebug Lite script files in the page and starts displaying the Firebug Lite console.
    
    debugAtAllCosts: 
    When you use dojo.require() to declare dependency, it makes an asynchronous call to load the necessary resources and also makes sure that the resource is not loaded twice. This is approach is efficient but has a downside: when there is an error in the loaded resource -- for example, in one of the classes -- Firebug shows an incorrect line number for the error. When you turn the debugAtAllCosts flag to true, it includes a <script> tag in the page markup for each resource instead of loading them asynchronously. Once the resources are loaded using the <script> tag, Firebug shows the .js file name where the error occurred along with the line number for that error, which makes debugging your code easier. Don't use this option in a production environment, because it adds a lot of overhead
    
    debugContainerId: 
    When this option is set, Dojo searches the document's DOM for an element with the specified ID and puts the Firebug Lite console inside that element.
    
    locale: 
    Dojo simplifies internationalization by providing an infrastructure for loading localized resources in the page. By default it uses the locale of the user agent, but you can override that by setting the locale option.
    
    extraLocale:
    This option, which has no default value, specifies additional locales whose resources should also be loaded alongside the default locale when calls to dojo.requireLocalization() are processed.

    baseUrl:
    Dojo downloads required .js files on demand. By default it downloads the dependencies from the same location that dojo.js was downloaded from. If you want to change this for some reason, set the baseUrl property to the location from which the dependency .js files should be downloaded.
    
    modulePaths: 
    You can extend the Dojo framework by creating your own classes and putting them under a custom directory structure. When you do that, you must map the namespace name to directory name so that dojo.require() can find it. Setting the modulePaths option allows you to map the namespace to the directory name. (I'll talk more about this later in this article.).
    
    afterOnLoad:
    This option indicates that Dojo was added to the page after the page load. In this case Dojo doesn't wait for the page DOMContentLoad/load events and fires its dojo.addOnLoad callbacks after making sure all outstanding dojo.required modules have loaded.

    parseOnLoad: 
    Dojo has an HTML parser that parses the document's DOM structure to find the nodes with dojoType attribute and convert them into Dojo widgets. When you set the parseOnLoad flag's value to true, Dojo parses the DOM document on loading and converts the nodes to Dijit widgets.

    addOnLoad: 
    You can set name of a function or an array of names of the functions that should be called once the page is loaded.

*/


var djConfig = {
    parseOnLoad: true,

    isDebug: true,
    
    locale: 'en-us',
};
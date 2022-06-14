var win = document.windows[0]
win.perspective = Perspective.BuiltIn.Forecast
var date = new Date().setHours(0, 0, 0)
var fday = win.forecastDayForDate(new Date(date))
win.selectForecastDays([fday])



var windowContent = document.windows[0].content
var nodes = new Array()
windowContent.rootNode.apply(item => {
   if (item.object instanceof Task) {
        nodes.push(item)
       task = item.object
    console.log("Pushing Task" + task.id + " - " + task.name + "\n" + JSON.stringify(Object.values(task)))
   }else if (item.object instanceof Calendar) {
        console.log("Calendar object!");
    }else if (item.object instanceof DatabaseObject) {
       console.log("Database object!");
   }else if (item.object instanceof ForecastDay.Status){
       console.log("Forecast Day Status");
   }else {
       console.log("not a task: " + item.object.__proto__);
       console.log(Object.entries(item));
   }
});
if(nodes.length > 0){
    windowContent.select(nodes)
}

// ot a task: [object _omnijs_AnonymousProxyPrototype]
// not a task: [object ForecastDayPrototype]










    /*{
        "type": "action",
        "targets": ["omnifocus"],
        "author": "Otto Automator",
        "identifier": "com.omni-automation.of.select-all-visible-items",
        "version": "1.0",
        "description": "This action will select all of the tasks and/or projects in the current content view. (macOS only)",
        "label": "Select Items in View",
        "shortLabel": "Select Items"
    }*/
    (() => {
        var action = new PlugIn.Action(function(selection, sender){
            // action code
            // selection options: tasks, projects, folders, tags
            var tasksCheckbox = new Form.Field.Checkbox(
                "shouldSelectTasks",
                "Tasks",
                false
            )
            var projectsCheckbox = new Form.Field.Checkbox(
                "shouldSelectProjects",
                "Projects",
                false
            )
            var inputForm = new Form()
            inputForm.addField(tasksCheckbox)
            inputForm.addField(projectsCheckbox)
            var formPromise = inputForm.show("Select in content view:","Continue")

            inputForm.validate = function(formObject){
                var shouldSelectTasks = formObject.values['shouldSelectTasks']
                var shouldSelectProjects = formObject.values['shouldSelectProjects']
                return ((shouldSelectTasks || shouldSelectProjects) ? true:false)
            }

            formPromise.then(function(formObject){
                var shouldSelectTasks = formObject.values['shouldSelectTasks']
                var shouldSelectProjects = formObject.values['shouldSelectProjects']
                var items = new Array()
                document.windows[0].content.rootNode.apply((item) => {
                    if (shouldSelectTasks && item.object instanceof Task) {
                        items.push(item);
                    }
                    if (shouldSelectProjects && item.object instanceof Project) {
                        items.push(item);
                    }
                })
                if(items != []){
                    document.windows[0].content.select(items)
                }
            })
        });

        action.validate = function(selection, sender){
            // validation code
            // selection options: tasks, projects, folders, tags
            return (Device.current.mac)
        };

        return action;
    })();
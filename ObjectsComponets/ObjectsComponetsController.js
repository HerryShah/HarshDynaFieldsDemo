({
init: function(component, event, helper) {
    var action = component.get("c.getObjectName");
    action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {           
            var allValues = response.getReturnValue();
            component.set("v.options", allValues);
        }                    
        else if (state === "ERROR") {
            var errors = response.getError();
            if (errors) {
                if (errors[0] && errors[0].message) {
                    console.log("Error message: " + 
                             errors[0].message);
                }
            } 
            else {
                console.log("Unknown Error");
            }
        }
    });
    $A.enqueueAction(action);
 },
    handleClick : function(component, event, helper) {
    	//alert(component.find("Objects").get("v.value")+'selected value');
        var selectedval = component.find("Objects").get("v.value");
        var action = component.get("c.getObjectFieldsName");
        action.setParams({
            "objectname" : selectedval
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                //var result =response.getReturnValue();
                //alert(result+'result');
                var custs = [];
                var conts = response.getReturnValue();
                for ( var key in conts ) {
                    //alert(key+'key'+conts[key]+'conts');
                custs.push({value:conts[key], key:key});
                }
                console.log(custs+'custs');
                component.set('v.Fieldsmap', custs);
                component.set('v.ShowTest', true);
               	//component.set("v.Fieldsmap", result);
            }
        });
        $A.enqueueAction(action);
        //console.log(component.find("distance").get("v.value"));
	},
	getSelectedAccount : function(component, event,helper) { 
        var selectedId='';
        //when using <ui:inputCheckbox> instead html checkbox
        //selectedId=event.getSource().get("v.text");                
        selectedId = event.target.getAttribute('id');
        if(document.getElementById(selectedId).checked && component.get("v.SelectedAccount").indexOf(selectedId) < 0)
            component.get('v.SelectedAccount').push(selectedId);
        else{
            var index = component.get("v.SelectedAccount").indexOf(selectedId);
            if (index > -1) {
                component.get("v.SelectedAccount").splice(index, 1); 
            }
        }
    },
    
    deleteAccount:function(component,event,helper){
        var selectedAccount=component.get("v.SelectedAccount");
        var field_list = '';
        var i;
        var object = component.find("Objects").get("v.value");
        //alert(component.find("Objects").get("v.value")+'dsadsa');
        if(selectedAccount.length>0){
            for (i = 0; i < selectedAccount.length; i++) {
                if(i == (selectedAccount.length - 1)){
                    field_list += selectedAccount[i]+" ";
                }else{
                	field_list += selectedAccount[i] + ",";    
                }
			}
            console.log(field_list+'field_list'+object+'object');
            var action123 = component.get("c.getFieldsValue1234577");
            action123.setParams({
                "Fields543535" : "id, name",
                "Objectname123" : "contact"
            });
            action123.setCallback(this, function(response123) {
            var state = response123.getState();
            if (state === "SUCCESS") {
                var conts123 = response123.getReturnValue();
                console.log(conts123+'conts123');
                component.set('v.Fieldsvallist', conts123);
                component.set('v.ShowTestval', true);
               	//component.set("v.Fieldsmap", result);
            }
        });
        $A.enqueueAction(action123);
        }
        else{
            alert('Please select atleast one field.')
        }
    }
})
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
        //selectedId = selectedId.charAt(0).toUpperCase() + selectedId.slice(1);
        //alert(selectedId+'selectedId');
        if(document.getElementById(selectedId).checked && component.get("v.SelectedAccount").indexOf(selectedId) < 0){
			var test12 = selectedId.charAt(0).toUpperCase() + selectedId.slice(1);            
            component.get('v.SelectedAccount').push(test12);
        }else{
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
        var objectname1234 = component.find("Objects").get("v.value");
        //alert(component.find("Objects").get("v.value")+'dsadsa');
        if(selectedAccount.length>0){
            for (i = 0; i < selectedAccount.length; i++) {
                console.log(selectedAccount[i]+'slectiiii');
                if(i == (selectedAccount.length - 1)){
                    field_list += selectedAccount[i]+" ";
                }else{
                	field_list += selectedAccount[i] + ",";    
                }
			}
            console.log(field_list+'field_list'+objectname1234+'object');
            var action123 = component.get("c.getFieldsValue1234577");
            action123.setParams({
                "Fields543535" : field_list,
                "Objectname123" : objectname1234
            });
            action123.setCallback(this, function(response123) {
            var state = response123.getState();
            if (state === "SUCCESS") {
                //var conts123 = JSON.stringify(response123.getReturnValue());
                var conts123 = response123.getReturnValue();
                console.log(JSON.stringify(conts123)+'conts123');
                console.log(component.get("v.SelectedAccount")+'selectedAccount');
                var selectedAccount123 = component.get("v.SelectedAccount");
                /*for (var j = 0; j < selectedAccount123.length; j++) {
                    alert(selectedAccount123[j]);
                }*/
                component.set('v.innerData', selectedAccount123);
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
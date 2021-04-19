public class QueryBuilderLightning {
@AuraEnabled
    public static List<String> getObjectName(){
        List<String> objects=new List<String>();
       List<Schema.SObjectType> gd = Schema.getGlobalDescribe().Values();  
        for(SObjectType sot:gd){
           objects.add(sot.getDescribe().getName());
           objects.sort();  
        }
        return objects;
    }
    @AuraEnabled
    public static map<String,string> getObjectFieldsName(String objectname){
        String selectedSObject = objectname;
        map<string, string> fieldList = new map<string, string>();
        if(selectedSObject != null){
            map<string,SObjectField> fList = schema.getGlobalDescribe().get(selectedSObject).getDescribe().fields.getMap();
            for(string str: fList.keySet()){
                //String value = fList.get(str).getDescribe().getType();
				fieldList.put(str, String.valueOf(fList.get(str).getDescribe().getType()));                
                //fieldList.put(str, 'value');                
            }
        }else{
            return null;
        }
        return fieldList;
    }
    /*@AuraEnabled
    public static map<String,string> getFieldsValue(String Fields, String Objectname){
        String selectedSObject123 = objectname;
        String fields123 = Fields;
        map<string, string> fieldList123 = new map<string, string>();
        List<objectname> lstobj = [select fields123 from objectname];
        
        //return fieldList123;
    }*/
}
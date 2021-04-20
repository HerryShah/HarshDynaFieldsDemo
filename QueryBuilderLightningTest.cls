@isTest
public class QueryBuilderLightningTest {
	@isTest
    public static void QueryBuilderDataTest(){
		test.startTest();
        QueryBuilderLightning.getObjectName();
        QueryBuilderLightning.getObjectFieldsName('Account');
        QueryBuilderLightning.getFieldsValue1234577('id, name ','Account');
		test.stopTest();
	}
}
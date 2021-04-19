@isTest
public class QueryBuilderLightningTest {
	@isTest
    public static void QueryBuilderDataTest(){
		test.startTest();
        QueryBuilderLightning.getObjectName();
        QueryBuilderLightning.getObjectFieldsName('Account');
		test.stopTest();
	}
}
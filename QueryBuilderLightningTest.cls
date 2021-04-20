@isTest
public class QueryBuilderLightningTest {
	@isTest
    public static void QueryBuilderDataTest(){
        Account ac = new Account();
        ac.Name = 'testacct1';
        insert ac;
        test.startTest();
        QueryBuilderLightning.getObjectName();
        QueryBuilderLightning.getObjectFieldsName('Account');
        QueryBuilderLightning.getFieldsValue1234577('id, name ','Account');
		test.stopTest();
	}
}
public class ContactController {
    @AuraEnabled
    public static String createContact(String name, String contactId) {
        try {
            // Crie um novo contato com os parâmetros fornecidos
            Contact newContact = new Contact();
            newContact.Name = name;
            newContact.Id = contactId; // Certifique-se de que o campo Id seja preenchido corretamente

            // Insira o novo contato no Salesforce
            insert newContact;

            // Retorne o nome do contato recém-criado para exibição no Lightning Web Component
            return newContact.Name;
        } catch(Exception e) {
            // Trate exceções, se necessário
            System.debug('Erro ao criar contato: ' + e.getMessage());
            throw new AuraHandledException('Erro ao criar contato: ' + e.getMessage());
        }
    }
}

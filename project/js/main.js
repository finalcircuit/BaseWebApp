module.exports = { getContactById, getContactByEmail };

//function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  //$("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  //$("p").html("High five! You're building your first web app!");
//}

async function getContactById (res, status, hubspotClient) {
  console.log('');
  console.log('=== Retrieving a contact from HubSpot via ID using API Client ===');
  const contactId = 4501;
  try {
    console.log('===> hubspotClient.crm.contacts.basicApi.getById');
    const result = await hubspotClient.crm.contacts.basicApi.getById(contactId);
    console.log(result);
    status = 'y';
    return result;
  } catch (e) {
    console.error('  > Unable to retrieve contact');
    console.log(e);
    status = 'n';
  }
}

// useful: https://community.hubspot.com/t5/APIs-Integrations/Update-contact-with-email-as-ID-through-the-Hubspot-API/m-p/623680
async function getContactByEmail(res, hubspotClient, email) {
  const passedemail = email;
  const properties = ["firstname", "lastname", "company", "business_interests"];
  const propertiesWithHistory = undefined;
  const associations = undefined;
  const archived = false;
  const idProperty = "email";

  try {
    console.log('===> hubspotClient.crm.contacts.basicApi.getByEmail');
    const result = await hubspotClient.crm.contacts.basicApi.getById(
      passedemail,
      properties,
      propertiesWithHistory,
      associations,
      archived,
      idProperty
      );
    console.log(result);
    return result;
  } catch (e) {
    console.error('  > Unable to retrieve contact');
    console.log(e);
    return "error";
  }

};
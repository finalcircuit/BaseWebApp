module.exports = { getContactById };

function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}

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
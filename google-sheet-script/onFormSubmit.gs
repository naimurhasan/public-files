function onFormSubmit(e) {
  
  var url = "<web_hook>";  
    
  // Open a form by ID and log the responses to each question.
  var form = FormApp.openById("<form_id>"); // https://docs.google.com/forms/d/FormID/edit
  var formResponses = form.getResponses();
  var formResponse = formResponses[formResponses.length-1];
  var itemResponses = formResponse.getItemResponses();
  
  Logger.log(itemResponses.length);
  
  var data = {};  
    
  for(var i = 0; i<itemResponses.length; i++){
        data[itemResponses[i].getItem().getTitle()] = itemResponses[i].getResponse();
  }  

  var options = {
  "method": "post",
  "headers": {
  "Content-Type": "application/json"
  },
  "payload": JSON.stringify(data)
  };
    
  var response = UrlFetchApp.fetch(url, options);
}

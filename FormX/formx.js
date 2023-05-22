function overridingFormSubmission(form){
    //capturing the original form submission
    var original_submission = form.submit;

    //modifying the form submission function
    form.submit = function(){
        //asking the user for the number of reptions of this form is needed
        var rep_count = prompt("How many times do you want to submit this form?");

        if(rep_count){
            //saving the form data
            var form_data = new FormData(form);

            //submitting the form multiple times
            for(var i = 0; i < rep_count; i++){
            //cloning data
            var clone_data = new FormData(form);
            clone_data = form_data;

            //creating a new request and seding the clone data
            var request = new XMLHttpRequest();
            request.open(form.method, form.action, true);
            request.send(clone_data);
            }
        }

        //calling the original form submission function
        original_submission.call(form);

    };
}



//finding the google form
var form = document.querySelector("form");

//overriding the form when submit button clicked
if (form){
    var submitButton = form.querySelector ('input[type="submit"], button[type="submit"]');
    if(submitButton){
        submitButton.addEventListener ("click", function() {
            overridingFormSubmission(form);
        });
    }
}
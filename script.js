


setInterval(function () {
     var today = dayjs();
    $('#currentDate').text(today.format('MMM D, YYYY, h:mm:ss a'));
}, 1000);
setInterval;


$("#message").dialog({
    autoOpen: false,
    modal: true, // added modal
    show: {
        effect: "fade",
        duration: 1000
    },
    hide: {
        effect: "blind",
        duration: 1000
    },

    //created buttons
    buttons: {
        cancel: function () {
            $(this).dialog('close');
        },
        'Add': function () {
            projectInfo.projectName = $('#projectName').val();
            projectInfo.ProjectType = $('#ProjectType').val();
            projectInfo.DueDate = dayjs($('#DueDate').val()).format('MMM D, YYYY');




            
            // alert(today.diff(projectInfo.DueDate));.format('MMM D, YYYY')
            timeDiff();
            appendProject();
            $(this).dialog('close');
        }
    }
});
$('#addProject').on('click', function () {
    $('#message').dialog('open');
});


var projectInfo = {
    projectName,
    ProjectType,
    DueDate
};

var tbody = $('#t-body');
var appendProject = function(){
    var trEl = $('<tr>');
    tbody.append(trEl);

    var tdProjectName = $('<td>' + projectInfo.projectName + '</td>');
    tdProjectName.addClass('border px-3');
    trEl.append(tdProjectName);

    var tdProjectType = $('<td>' + projectInfo.ProjectType + '</td>');
    tdProjectType.addClass('border px-3');
    trEl.append(tdProjectType);

    var tdDueDate = $('<td>' + projectInfo.DueDate + '</td>');
    tdDueDate.addClass('border px-3');
    trEl.append(tdDueDate);
    
};

var timeDiff = function () {
    var difference = today.isBefore(projectInfo.DueDate);


    var today = dayjs();
    var dueDate = dayjs(projectInfo.DueDate);
    
    // Check if the projectInfo.DueDate is valid and not empty
    if (dueDate.isValid()) {
      var isBefore = today.isBefore(dueDate, 'day');
      var isSame = today.isSame(dueDate, 'day');
      var isAfter = today.isAfter(dueDate, 'day');
    
      console.log("Is before:", isBefore);
      console.log("Is same:", isSame);
      console.log("Is after:", isAfter);
    
      console.log('Due date:', dueDate.format('YYYY-MM-DD'));
      console.log('Today:', today.format('YYYY-MM-DD'));
    } else {
      console.log('Invalid due date');
    }
    

}
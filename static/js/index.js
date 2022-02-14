$("#fileupload").change (function() {
    let formData = new FormData(); 
    formData.append("file", $("#fileupload")[0].files[0]);
    $.ajax({
        url:"/app/upload",
        method:"POST",
        data:formData,
        contentType: false,
        processData: false,
        success:function(res){
            $("#container").val(res);
        }
    });

});


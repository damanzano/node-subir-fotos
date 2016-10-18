/**
 * http://usejsdoc.org/
 */
/**
 * Este archivo se encarga de todas las operaciones
 * sobre la página principal.
 */
$(document).ready(function(){
	
	var uploadForm = $('#upload-form');
	
	uploadForm.submit(function(event){
		event.preventDefault();
		
		/* 
		 * Realizar el llamado asyncrono y controllar al momento
		 * que llegue la respuesta.
		 */
		createPhoto().done(function(data){
			if(data!=null){
				window.location.replace('/');
			}
		});
	});
	
	
	
});

/**
 * Este método se encarga de realizar un llamado ajax
 * al servicio web de fotos.
 * 
 * @returns
 */
function createPhoto() {
	var formData = new FormData($('#upload-form')[0]);
	console.log(formData);
    return $.ajax({
      url: "/photos",
      type: "post",
	  contentType: false,
	  processData: false,
      data: formData
    });
  }
/**
 * Este archivo se encarga de todas las operaciones
 * sobre la página principal.
 */
$(document).ready(function(){
	
	/* 
	 * Realizar el llamado asyncrono y controllar al momento
	 * que llegue la respuesta.
	 */
	getPhotos().done(function(data){
		if(data!=null){
			//console.log(data);
			var gallery = $("#gallery");
			var photos = $();
			$.each(data, function(index, value){
				var column = $("<div>", {"class": "col-sm-4"});
				var photo = $("<div>", {"class": "photo-card panel panel-default"});
				var image = $("<img>", {"src":value.photo_path, "class":"card-image img-responsive"});
				var author = $("<span>"+value.author+"</span>").addClass("card-author lead clearfix");
				var place = $("<span>"+value.place+"</span>").addClass("card-place");
				
				
				photo.append(image);
				photo.append(author);
				photo.append(place);
				column.append(photo)
				gallery.append(column);
			});
		}
	});
	
	
});

/**
 * Este método se encarga de realizar un llamado ajax
 * al servicio web de fotos.
 * 
 * @returns
 */
function getPhotos() {
    return $.ajax({
      url: "/photos",
      type: "get"
    });
  }
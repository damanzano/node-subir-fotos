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
				var photo = $("<div>", {"class": "photo-card"});
				var image = $("<img>", {"src":value.photo_path, "class":"card-image"});
				var author = $("<span>"+value.author+"</span>", {"class":"card-author"});
				var place = $("<span>"+value.place+"</span>", {"class":"card-place"});
				
				photo.append(image);
				photo.append(author);
				photo.append(place);
				gallery.append(photo);
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
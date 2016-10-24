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
				var card
				//var photo = $("<photo-card>", {"author": value.author, "place":value.place, "image":value.photo_path});
				var photo = $("<paper-card>",  {"image":value.photo_path, "elevation":5 });
				var cardContent = $("<card-content>", {"class":" layout vertical"});
				//var image = $("<img>", {"src":value.photo_path, "class":"card-image"});
				var author = $("<span>"+value.author+"</span>").addClass("card-author");
				var place = $("<span>"+value.place+"</span>").addClass("card-place");
				
				//photo.append(image);
				cardContent.append(author);
				cardContent.append(place);
				photo.append(cardContent)
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
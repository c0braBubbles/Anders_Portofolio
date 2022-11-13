// Class decleration
class Media {
    constructor(path, name, headerTxt, subTxt) {
        this.path = path; 
        this.name = name; 
        this.headerTxt = headerTxt; 
        this.subTxt = subTxt;
    }   
}


var workGalleryDiv = document.getElementById("work_gallery"); 
let paths = []; 
let names = []; 
let headerTxt = []; 
let subTxt = [];

    const casos = [
        "https://youtu.be/",
        "https://www.youtube.com/watch?v="
    ];
    let destino = window.location.href;// url a comprobar    
    
    if(destino.startsWith(casos[0]) || destino.startsWith(casos[1])){        
        destino = destino.replace("youtu.be/","www.youtube.com/embed/");
        destino = destino.replace("&feature=youtu.be","");
        destino = destino.replace("/watch?v=","/embed/");//change to semi fullscreen
        destino = destino.replace("&t=","?start=");//change time start of video
        destino = destino.replace("&start=","?start=");//change time start of video
        // si es una lista
        if(destino.includes("list")){
            destino = destino.replace("&list=","?list=");//add compatibility with list
            destino = destino.replace("?start=","&start=");//change time start of video
        }
        
        destino = destino.replace("&feature=youtu.be","");
        destino = destino.replace("&feature=emb_logo","");
        window.location.replace(destino);
    }

